import React, {Component} from "react";
import LogoutScreen from "./LogoutScreen.js";
import SideBar from "../SideBar/SideBar.js";
import {DrawerNavigator} from "react-navigation";
const LogoutScreenRouter = DrawerNavigator(
    {
	Logout:{screen:LogoutScreen}
    },
    {
	contentComponent: props => <SideBar {...props} />
    }
);
export default LogoutScreenRouter;
