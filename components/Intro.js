import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import type { RouterHistory } from 'react-router'

class Intro extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./assets/dop_logo.png')}
        />
        <View style={styles.mensaje}>
          <Text>Esto es la aplicación dop!</Text>
          <Text>Es una aplicación de citas</Text>
          <Text>podras conocer diversas personas,</Text>
          <Text>para planes de amigos o algo mas.</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 219,
    height: 150
  },
  mensaje: {
    alignItems: 'center'
  },
});

export default Intro
