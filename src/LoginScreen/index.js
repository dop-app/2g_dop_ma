import React, {Component} from "react";
import LoginScreen from "./LoginScreen.js";
import SideBarLogin from "../SideBar/SideBarLogin.js";
import {DrawerNavigator} from "react-navigation";
const LoginScreenRouter = DrawerNavigator(
    {
	Login:{screen:LoginScreen}
    },
    {
	contentComponent: props => <SideBarLogin {...props} />
    }
);
export default LoginScreenRouter;
