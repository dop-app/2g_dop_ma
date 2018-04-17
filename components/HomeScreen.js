import React from 'react';
// import { Button, View, Text, Image } from 'react-native';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'dop Menu!',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Perfil" onPress={this._showPerfilApp} />
        <Button title="Amigos" onPress={this._showAmigosApp} />
        <Button title="Chat" onPress={this._showChatApp} />
        <Button title="Citas" onPress={this._showCitasApp} />
        <Button title="Recomendaciones" onPress={this._showRecomendacionesApp} />
        <Text></Text>
        <Button title="Salir" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showPerfilApp = () => {
    this.props.navigation.navigate('Perfil');
  };

  _showAmigosApp = () => {
    this.props.navigation.navigate('Amigos');
  };

  _showChatApp = () => {
    this.props.navigation.navigate('Chat');
  };

  _showCitasApp = () => {
    this.props.navigation.navigate('Citas');
  };

  _showRecomendacionesApp = () => {
    this.props.navigation.navigate('Recomendaciones');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen
