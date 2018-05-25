import React, { Component } from "react";
import Profile from "./Profile.js";
import EditScreenOne from "./EditScreenOne.js";
import MatchScreen from "../MatchScreen/index.js";
import FriendScreen from "../FriendScreen/index.js";
import EventScreen from "../EventScreen/index.js";
import LoginScreen from "../LoginScreen/index.js";
import SideBar from "../SideBar/SideBar.js";

import { DrawerNavigator } from "react-navigation";

const ProfileScreenRouter = DrawerNavigator({
    Perfil: {screen: Profile},
    Buscar: {screen: MatchScreen},
    Amigos: {screen: FriendScreen},
    Eventos: {screen: EventScreen},
    Salir: {screen: LoginScreen},
    EditScreenOne: {screen: EditScreenOne}
},{
  contentComponent: props => <SideBar {...props} />
});

export default ProfileScreenRouter;
