import React, { Component } from "react";
import Friends from "./Friends.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";

const MatchScreenRouter = DrawerNavigator({
  Amigos: {screen: Friends}
},{
  contentComponent: props => <SideBar {...props} />
});

export default MatchScreenRouter;
