import React, {Component} from "react";
import LoginScreen from "./LoginScreen.js";
import SideBar from "../SideBar/SideBar.js";
import Profile from "../ProfileScreen/index.js";
import {DrawerNavigator} from "react-navigation";
const LoginScreenRouter = DrawerNavigator(
    {
	Login:{screen:LoginScreen},
	Profile:{ screen: Profile}, 
    },
    {
	contentComponent: props => <SideBar {...props} />
    }
);
export default LoginScreenRouter;
