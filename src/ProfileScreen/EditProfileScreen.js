import React  from "react";
import {AppRegistry, Alert} from "react-native";
import { connect } from 'react-redux';
import {Container,Header, Content, Left, Body,Title,Card,CardItem,Right,Icon,Button, Text} from "native-base";
class EditProfileScreen extends React.Component{
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
