// File: src/index.ts
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import { DefaultPortNumber, LogHandler, LogLevel } from 'ezpzos.Core';
import otpRouter from './routes/OTP';

// Load environment variables from .env file
dotenv.config();

const port = process.env.PORT || DefaultPortNumber;
const app: Express = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('HELLO, this is now running');
});

app.get('/hi', (req: Request, res: Response) => {
    res.send('Worked!');
});

app.use('/otp', otpRouter);

app.listen(port, () => {
    new LogHandler('server.ts').Log('app.listen', `now listening on port ${port}`, LogLevel.INFO);
});
