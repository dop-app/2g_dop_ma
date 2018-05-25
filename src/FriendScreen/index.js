import React, { Component } from "react";
import Friends from "./Friends.js";
import viewFriend from "./viewFriend.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";

const MatchScreenRouter = DrawerNavigator({
    Amigos: {screen: Friends},
    viewFriend: {screen: viewFriend}
},{
  contentComponent: props => <SideBar {...props} />
});

export default MatchScreenRouter;
