import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import QRScannerPage from "./Pages/QR/QRScannerPage";
import Menu from "./Pages/Menu/Menu";
import { DefaultMenuRoutesValues } from "ezpzos.core";
import Profile from "./Pages/Profile/Profile";
import LoginSignupPage from "./Pages/LoginOrSignup/LoginOrSignup";
import OTPPage from "./Pages/OTPPage/OTPPage";
import BusinessHome from "./Pages/Kitchen/BuisnessHome";
const AppRoutes: React.FC = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="signup" element={<LoginSignupPage  isLogin={false}  />} />
		<Route path="login" element={<LoginSignupPage isLogin={true} />} />
		<Route path="otp" element={<OTPPage />} />

		<Route path="scan" element={<QRScannerPage />} />
		<Route path={DefaultMenuRoutesValues.DineInRouteDefaultValue} element={<Menu />} />
		<Route path={DefaultMenuRoutesValues.TakeAwayRouteDefaultValue} element={<Menu />} />
		<Route path="profile" element={<Profile />} />

		{/* Business Routes */}
		<Route path="businesshome" element={<BusinessHome BusinessHomePageValues={{IsLoggedIn:true, HomePageButtonList:[],NotificationList:[]}}/>} />
		
	</Routes>
);

export default AppRoutes;
