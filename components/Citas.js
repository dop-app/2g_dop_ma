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

class Citas extends React.Component {
  static navigationOptions = {
    title: 'Citas',
  };

  render() {
    return (
      <View>
        <View style={styles.btn}>
          <Button title="Menu" onPress={this._showMenuApp} />
          <StatusBar barStyle="default" />
        </View>
        <View style={styles.container}>
          <Text>Esto es la aplicación dop!</Text>
          <Text>Es una aplicación de citas</Text>
          <Text>podras conocer diversas personas,</Text>
          <Text>para planes de amigos o algo mas.</Text>
          <Text>estoy desde el Citas.</Text>
        </View>
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
    alignItems: 'center',  // flex-start, center, flex-end, and stretch
    justifyContent: 'flex-start', // flex-start, center, flex-end, space-around, space-between and space-evenly
  },
  btn: {
    alignItems: 'flex-end',  // flex-start, center, flex-end, and stretch
    justifyContent: 'flex-start', // flex-start, center, flex-end, space-around, space-between and space-evenly
  },
});

export default Citas
