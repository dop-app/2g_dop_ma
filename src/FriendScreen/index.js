import React, { Component } from "react";
import Match from "./Friends.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";

const FriendScreenRouter = DrawerNavigator({
  Buscar: {screen: Match}
},{
  contentComponent: props => <SideBar {...props} />
});

export default FriendScreenRouter;
