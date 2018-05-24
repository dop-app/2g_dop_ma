import React, { Component } from "react";
import Events from "./Events.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";

const MatchScreenRouter = DrawerNavigator({
    Citas: {screen: Events}
},{
  contentComponent: props => <SideBar {...props} />
});

export default MatchScreenRouter;
