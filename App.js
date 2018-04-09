import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          <Text style={{color:'blue'}}>d
            <Text style={{color:'black'}}>o
              <Text style={{color:'red'}}>p
              </Text>
            </Text>
          </Text>
        </Text>
        <Text>Esto es la aplicación dop!</Text>
        <Text>Hemos creado nuestro propio TINDER</Text>
        <Text>con juegos de azar y sin mujerzuelas.</Text>
        <Text>SACUDELO para hacer el match.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 53,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
