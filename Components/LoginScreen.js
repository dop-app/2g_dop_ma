import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class LoginScreen extends React.Component {
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

        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.navigate('signupScreen')} >
          Go to Signup
        </Text>

        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.navigate('forgottenPasswordScreen')} >
          Go to Forgot Password
        </Text>

        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.navigate('drawerStack')} >
          Pretend we logged in
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linky: {
    fontWeight: 'bold',
    color: '#4C3E54',
    paddingTop: 10
  }
})
