import * as dotenv from 'dotenv';
import express, { Request, Response, Router } from 'express';
import { DafaultOTPVerificationValues, LogHandler, LogLevel } from 'ezpzos.core';
import { ConnectionPool, config as SqlConfig } from 'mssql';
import twilio from 'twilio';

dotenv.config();

const router: Router = express.Router();

const logger = new LogHandler('OTP.ts');

const accountSid = process.env.TWILIO_ACCOUNT_SID || DafaultOTPVerificationValues.AccountSidDefaultValue; 
const authToken = process.env.TWILIO_AUTH_TOKEN || DafaultOTPVerificationValues.AuthTokenDefaultValue; 
const serviceSid = process.env.TWILIO_SERVICE_SID || DafaultOTPVerificationValues.ServiceSidDefaultValue;

const client = twilio(accountSid, authToken);

const dbConfig: SqlConfig = {
    server: 'localhost', 
    authentication: {
        type: 'default',
        options: {
            userName: 'sa',
            password: '710316'  
        }
    },
    options: {
        encrypt: false,  
        database: 'EZPZOS'
    }
    
};

const pool = new ConnectionPool(dbConfig);

pool.connect().then(() => {
    logger.Log('pool.connect', 'Database connected', LogLevel.INFO);
}).catch(err => {
    logger.Log('pool.connect', `Database connection failed: ${err}`, LogLevel.ERROR);

});

interface SendOtpRequest extends Request {
    body: {
        mobile: string;
    };
}

interface VerifyOtpRequest extends Request {
    body: {
        mobile: string;
        otp: string;
    };
}

router.post('/send-otp', async (req: SendOtpRequest, res: Response) => {
    const { mobile } = req.body;

    try {
        // Send OTP using Twilio Verify service
        await client.verify.v2.services(serviceSid)
            .verifications
            .create({ to: mobile, channel: 'sms' });

        res.status(200).send('OTP sent successfully');
    } catch (error) {
        logger.Log('send-otp', `Error sending OTP: ${error}`, LogLevel.ERROR);
        res.status(500).send('Error sending OTP');
    }
});

router.post('/verify-otp', async (req: VerifyOtpRequest, res: Response) => {
    const { mobile, otp } = req.body;

    try {
        // Verify OTP using Twilio Verify service
        const verification_check = await client.verify.v2.services(serviceSid)
            .verificationChecks
            .create({ to: mobile, code: otp });

        if (verification_check.status === 'approved') {
            res.status(200).send('OTP verified successfully');
        } else {
            res.status(400).send('Invalid or expired OTP');
        }
    } catch (error) {
        logger.Log('verify-otp', `Error verifying OTP: ${error}`, LogLevel.ERROR);
        res.status(500).send('Error verifying OTP');
    }
});

export default router;
