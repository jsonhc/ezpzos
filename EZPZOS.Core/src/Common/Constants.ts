import { buffer } from "stream/consumers";

export const LogLevel = {
	ERROR: 0,
	WARN: 1,
	INFO: 2,
	DEBUG: 3,
	TRACE: 4,
	ALL: 5
};
export const LogLevelToString: { [index: number]: string } = {
	0: "ERROR",
	1: "WARN",
	2: "INFO",
	3: "DEBUG",
	4: "TRACE",
	5: "ALL"
};

export const DefaultTargetLogLevel = LogLevel.ALL;
export const LogFilePath = `src/../Log`;
export const LogFileName = `Log${new Date().toISOString().split(".")[0].replace(/\-/gi, "").replace(/\:/gi, "")}.log`;

export const BooleanTrueString = "true";
export const BooleanFalseString = "false";

//OTP config
export const DefaultOTPVerificationValues = {
	AccountSidDefaultValue: "AC63e06f89a641026e2cc4045d7c27082e",
	AuthTokenDefaultValue: "508a6e0fdfe4aca8d6575d1fc2b6be02",
	ServiceSidDefaultValue: "VA341cf7d3ecf7ff33274231890ba72d75"
};

//JWT config
export const DefaultJWTSecretKey = "7575922d869d79166c8b9e113ae0dc03b146a1c622f9bb5fdd9021d1901604be";
export const JWTTokenExpiringPeriod = "1d"

//default port number
export const DefaultPortNumber = 8000;

//Menu Routes Naming, change everything here if needed
export const DefaultMenuRoutesValues = {
	DineInDefaultValue: "Dine in",
	TakeAwayDefaultValue: "Take away",
	DineInRouteDefaultValue: "menu-dinein",
	TakeAwayRouteDefaultValue: "menu-takeaway",
	DineInToastDefaultValue: "You are now viewing the Dine In menu",
	TakeAwayToastDefaultValue: "You are now viewing the Take Away menu",
	TableNumberDefaultValue: "tableNumber"
};
//Restaurant Contact Card Naming
export const DefaultRestaurantDetails = {
	NameDefaultValue: "DemoData Sichuan Cuisine",
	AddressDefaultValue: "170 LiverPool ST, Hobart 7000",
	TagsDefaultValue: ["Hot food", "Chinese food", "Crazy Tuesday"],
	PhoneDefaultValue: "0470 000 000",
	HoursDefaultValue: ["Mon-Fri: 9am - 10pm", "Sat-Sun: 10am - 11pm"],
	AllergyInfoDefaultValue: "This is place holder"
};

//LoginSignup default names
export const DefaultLoginSignupValues = {
	LoginHeading: "Welcome Back",
	LoginSubtitle: "Sign in to continue :)",
	SignupHeading: "Join Us Today",
	SignupSubtitle: "To get more insight :)",
	PolicyDefaultValue: {
		HeadingDefaultValue: "By continuing, you agree to our",
		TermsDefaultValue: "Terms of Service",
		PrivacyDefaultValue: "Privacy Policy",
		ContentDefaultValue: "Content policies"
	},
	ContactFormDefaultValue: {
		PhoneRegionDefaultValue: "61",
		ThreeDots: "...",
		OR: "OR",
		SendOTPDefaultValue: "SEND OTP",
		GoogleDefaultValue: "Continue with Google",
		SigninDefaultValue: "SIGN IN",
		SignupDefaultValue: "SIGN UP",
		PhoneNumberDefaultValue: "Phone Number"
	}
};

//Client home page mock data
export const ClientHomePageValues = {
	IsLoggedIn: false,
	HomePageButtonList: [
		{
			Img: "DineInIcon.png",
			Title: "DINE IN"
		},
		{
			Img: "BookingIcon.png",
			Title: "BOOK"
		},
		{
			Img: "TakeawayIcon.png",
			Title: "TAKE AWAY"
		}
	],
	NotificationList: [
		{
			Title: "Vouchers",
			Content: "You have unused vouchers!"
		},
		{
			Title: "Vouchers",
			Content: "You have unused vouchers!"
		}
	]
};

//HomePage default names
export const DefaultHomePageValues = {
	LoggedInOpening: ["Hi @Username,", "Would you like to..."],
	NotLoggedInOpening: ["WELCOME BACK", ":D"],

	NotLoggedInLogo: "EZPZ OS",
	NotLoggedInSignInButton: {
		SignInButtonDefualtValue: "LOG IN",
		OfferSignUpDefaultValue: "Don't have an account? ",
		SignUpButtonDefualtValue: "Sign up :）"
	}
};


//Buisness home page mock data
export const BusinessHomePageValues = {
	IsLoggedIn: false,
	HomePageButtonList: [
		{
			Img: "DineInIcon.png",
			Title: "KITCHEN"
		},
		{
			Img: "BookingIcon.png",
			Title: "ADMIN"
		}
	],
	NotificationList: [
		{
			Title: "Reports",
			Content: "You have a report!"
		},
		{
			Title: "Booking notification",
			Content: "You have 4 new bookings!"
		},
		{
			Title: "Data",
			Content: "You have 6 tables active!"
		}
	]
};

//Google map API key
export const GOOGLE_MAPS_API_KEY = "AIzaSyBAhprZOFyMvXznLC3JXq5BrO7BcD66NGs";

export const Platform = {
	Web: "Web",
	Library: "Library",
	Express: "Express"
};

//Sidebar Content Naming, change everything here if needed
export const DefaultSideBarContent = [
	"Home",
	"Login/Profile",
	"E-Recipts",
	"Vouchers",
	"Restuarant Detail",
	"Book",
	"Payment",
	"Settings",
	"Error",
	"Help"
];
