// import React from 'react';
// import {
//   ActivityIndicator,
//   AsyncStorage,
//   Button,
//   StatusBar,
//   StyleSheet,
//   View,
// } from 'react-native';
import { StackNavigator, SwitchNavigator } from 'react-navigation'; // Version can be specified in package.json

import AuthLoadingScreen from './components/AuthLoadingScreen.js'
import SignInScreen from './components/SignInScreen.js'

import HomeScreen from './components/HomeScreen.js'

import Amigos from './components/Amigos.js'
import Chat from './components/Chat.js'
import Citas from './components/Citas.js'
import Perfil from './components/Perfil.js'
import Recomendaciones from './components/Recomendaciones.js'


const AppStack = StackNavigator({
  Home: HomeScreen,
  Amigos: Amigos,
  Chat: Chat,
  Citas: Citas,
  Perfil: Perfil,
  Recomendaciones: Recomendaciones
});

const AuthStack = StackNavigator({
  SignIn: SignInScreen
});

export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
