import React from "react";
import { StatusBar } from "react-native";
import { connect } from 'react-redux';
import { Container, Header, Title, Left, Icon, Text, Button, Body, Content, Form, Item, Input,Label } from "native-base";
import { login } from '../../redux/actions/auth';

class LoginScreen extends React.Component {
    constructor (props){
	super(props);
	this.state ={
	    route: 'LoginScreen',
	    username: '',
	    password: ''
	};
    }
    userLogin (e){
	this.props.onLogin(this.state.username, this.state.password);
	e.preventDefault();
    }
    render(){
	return(
	    <Container>
	      <StatusBar hidden={true}/>
	      <Header>
		<Body>
		  <Title style={{ fontFamily: 'Comfortaa_regular'}}>dop</Title>
		</Body>
	      </Header>
	      <Content padder>
		<Form >
		  <Item floatingLabel>
		    <Label>Username</Label>
		    <Input
		      value={this.state.username} 
		      onChangeText={(text) => this.setState({ username: text })} />
		  </Item> 
		  <Item floatingLabel>
		    <Label>Password</Label>
		    <Input
		      value={this.state.password} 
		      onChangeText={(text) => this.setState({ password: text })} 
		      secureTextEntry={true}/>
		  </Item>
		  <Button onPress={(e) => this.userLogin(e)} full style={{ marginTop: 10 }}><Text style={{ fontFamily: 'Comfortaa_regular'}}>Login</Text></Button>  
		</Form>
	      </Content>
	    </Container>
	);
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
	idUser: state.auth.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => { dispatch(login(username, password)); }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
