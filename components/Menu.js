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

import Perfil from "./Perfil"
import Recomendaciones from "./Recomendaciones"
import Chat from "./Chat"
import Amigos from "./Amigos"
import Citas from "./Citas"

class Menu extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <View style={styles.nav}>
            <Link
              to="/perfil"
              style={styles.navItem}
              underlayColor='#f0f4f7'>
                <Text>Perfil</Text>
            </Link>
            <Link
              to="/recomendaciones"
              style={styles.navItem}
              underlayColor='#f0f4f7'>
                <Text>Recomendaciones</Text>
            </Link>
            <Link
              to="/chat"
              style={styles.navItem}
              underlayColor='#f0f4f7'>
                <Text>Chat</Text>
            </Link>
            <Link
              to="/amigos"
              style={styles.navItem}
              underlayColor='#f0f4f7'>
                <Text>Amigos</Text>
            </Link>
            <Link
              to="/citas"
              style={styles.navItem}
              underlayColor='#f0f4f7'>
                <Text>Citas</Text>
            </Link>
          </View>

          <Route path="/perfil" component={Perfil}/>
          <Route path="/recomendaciones" component={Recomendaciones}/>
          <Route path="/chat" component={Chat}/>
          <Route path="/amigos" component={Amigos}/>
          <Route path="/citas" component={Citas}/>
        </View>
      </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  btn: {
    width: 200,
    backgroundColor: '#E94949',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  }
})

export default Menu
