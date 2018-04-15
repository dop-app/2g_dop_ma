import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeRouter,
  Route,
  Link,
  BackButton,
  Promt,
  withRouter,
  Redirect } from 'react-router-native'
import type { RouterHistory } from 'react-router'

import Menu from "./Menu"

class Chat extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Esto es la aplicación dop!</Text>
        <Text>Es una aplicación de citas</Text>
        <Text>podras conocer diversas personas,</Text>
        <Text>para planes de amigos o algo mas.</Text>
        <Text>estoy desde el Chat.</Text>
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
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
});

export default Chat
