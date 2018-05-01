import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Image
            style={{ width: 219, height: 150 }}
            source={require('./assets/dop_logo_negro.png')}
          />
          <Text>Esto es la aplicación dop!</Text>
          <Text>Es una aplicación de citas</Text>
          <Text>podras conocer diversas personas,</Text>
          <Text>para planes de amigos o algo mas.</Text>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>

          <Button success onPress={() => this.props.navigation.navigate('drawerStack')} >
            <Text style={styles.linky}> Pretend we logged in </Text>
          </Button>
        </Content>

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
      </Container>
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
