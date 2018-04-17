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

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Por favor, registrese',
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 219, height: 150 }}
          source={require('./assets/dop_logo_negro.png')}
        />
        <Text>Esto es la aplicación dop!</Text>
        <Text>Es una aplicación de citas</Text>
        <Text>podras conocer diversas personas,</Text>
        <Text>para planes de amigos o algo mas.</Text>
        <Text></Text>
        <Button title="Iniciar Sesión" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignInScreen
