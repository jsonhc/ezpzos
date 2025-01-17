import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BottomNavBar from "../../Components/BottomNavBar";
import RestaurantContactCard from "../../Components/MenuList/RestaurantContactCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopPopUpToast from "../../Components/MenuList/TopPopUpToast";
import MenuTab from "../../Components/MenuList/MenuTab";
import { DafaultMenuRoutesValues, DefaultRestaurantDetails } from "ezpzos.core";
import TopNav from "../../Components/TopNav";

const Menu: React.FC = () => {
	const location = useLocation();
	DefaultRestaurantDetails
	const navigate = useNavigate();
	const [tableNumber, setTableNumber] = useState<string | null>(null);
	const [selectedTab, setSelectedTab] = useState<string>(DafaultMenuRoutesValues.DineInDefaultValue);

	//to extract the tablenumber from /scan page
	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const tableNumber = params.get(DafaultMenuRoutesValues.TableNumberDefaultValue);
		setTableNumber(tableNumber);

		if (location.pathname.includes(DafaultMenuRoutesValues.DineInRouteDefaultValue)) {
			setSelectedTab(DafaultMenuRoutesValues.DineInDefaultValue);
			showToast(DafaultMenuRoutesValues.DineInToastDefaultValue);
		} else if (location.pathname.includes(DafaultMenuRoutesValues.TakeAwayRouteDefaultValue)) {
			setSelectedTab(DafaultMenuRoutesValues.TakeAwayDefaultValue);
			showToast(DafaultMenuRoutesValues.TakeAwayToastDefaultValue);
		}
	}, [location.search, location.pathname]);

	const handleCallStaff = () => {
		//TODO: placeholder only, need to be finalised
		console.log("Call Staff clicked");
	};

	const showToast = (message: string) => {
		toast(<TopPopUpToast message={message} closeToast={() => toast.dismiss()} />, { autoClose: 3000 });
	};

	return (
		<div className="flex flex-col items-center h-screen relative">
			<TopNav />
			<RestaurantContactCard
				name={DefaultRestaurantDetails.NameDefaultValue}
				address={DefaultRestaurantDetails.AddressDefaultValue}
				tags={DefaultRestaurantDetails.TagsDefaultValue}
				phone={DefaultRestaurantDetails.PhoneDefaultValue}
				hours={DefaultRestaurantDetails.HoursDefaultValue}
				allergyInfo={DefaultRestaurantDetails.AllergyInfoDefaultValue}
				onCallStaff={handleCallStaff}
			/>
			<div className="w-full mt-4">
				{selectedTab === DafaultMenuRoutesValues.DineInDefaultValue && (
					<>
						<MenuTab tableNumber={tableNumber} selectedTab={selectedTab} />
					</>
				)}
				{selectedTab === DafaultMenuRoutesValues.TakeAwayDefaultValue && (
					<>
						<MenuTab tableNumber={tableNumber} selectedTab={selectedTab} />
					</>
				)}
			</div>
			<ToastContainer />
			<BottomNavBar isClient={true} />
		</div>
	);
};

export default Menu;
