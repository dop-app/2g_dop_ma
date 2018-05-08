import React, { Component } from "react";
import Match from "./Match.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";

const MatchScreenRouter = DrawerNavigator({
  Buscar: {screen: Match}
},{
  contentComponent: props => <SideBar {...props} />
});

export default MatchScreenRouter;
