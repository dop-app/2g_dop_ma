import React, { Component } from "react";
import Profile from "./Profile.js";
import EditScreenOne from "./EditScreenOne.js";
import MatchScreen from "../MatchScreen/index.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";

const ProfileScreenRouter = DrawerNavigator({
  Perfil: {screen: Profile},
  Buscar: {screen: MatchScreen}
},{
  contentComponent: props => <SideBar {...props} />
});

export default ProfileScreenRouter;
