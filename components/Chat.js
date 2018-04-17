import React from 'react';
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

class OtherScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Menu" onPress={this._showMenuApp} />
        <StatusBar barStyle="default" />
        <Text></Text>
        <Text>Esto es la aplicación dop!</Text>
        <Text>Es una aplicación de citas</Text>
        <Text>podras conocer diversas personas,</Text>
        <Text>para planes de amigos o algo mas.</Text>
        <Text>estoy desde el Chat.</Text>
      </View>
    );
  }

  _showMenuApp = () => {
    this.props.navigation.navigate('Home');
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

export default OtherScreen
