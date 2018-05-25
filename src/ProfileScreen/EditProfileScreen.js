import React  from "react";
import {AppRegistry, Alert} from "react-native";
import { connect } from 'react-redux';
import {Container,Header, Content, Left, Body,Title,Card,CardItem,Right,Icon,Button, Text,Form, Item, Input,Label} from "native-base";
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
class EditProfileScreen extends React.Component{
  constructor (props){
super(props);
this.state ={
    route: 'LoginScreen',
    name: '',
    email: '',
    gender: '',
    age: '',
    picture:''
};
  }
    render() {
	return (
	    <Container>
	      <Header>
		<Left>
		  <Button transparent onPress={() => this.props.navigation.goBack() }>
		    <Icon name="arrow-back"/>
		  </Button>
		</Left>
		<Body>
		  <Title>Editar perfil </Title>
		</Body>
		<Right />
	      </Header>
	      <Content padder>
		<Card>
		  <CardItem>
		    <Icon active name="paper-plane" />
		    <Text>Edit profile</Text>
		    <Right>
		      <Icon name="close"/>
        </Right>
		  </CardItem>
		</Card>
    <Form >
		  <Item floatingLabel>
		    <Label>Nombre</Label>
		    <Input
		      value={this.state.name}
		      onChangeText={(text) => this.setState({ name: text })} />
		  </Item>
		  <Item floatingLabel>
		    <Label>Email</Label>
		    <Input
		      value={this.state.email}
		      onChangeText={(text) => this.setState({ email: text })}/>
		  </Item>
      <Item floatingLabel>
		    <Label>Género</Label>
		    <Input
		      value={this.state.gender}
		      onChangeText={(text) => this.setState({ gender: text })}/>
		  </Item>
      <Item floatingLabel>
		    <Label>Edad</Label>
		    <Input
		      value={this.state.age}
		      onChangeText={(text) => this.setState({ age: text })}/>
		  </Item>
      <Item floatingLabel>
		    <Label>Foto</Label>
		    <Input
		      value={this.state.picture}
		      onChangeText={(text) => this.setState({ picture: text })}/>
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
	idUser: state.auth.id,
	data: state.userInfo
    };
};
/*
  const mapDispatchToProps = (dispatch) => {
    return {
	onLoadData: (id) => { dispatch(loadData(id)); }
    };
};
*/
export default connect(mapStateToProps)(EditProfileScreen);
