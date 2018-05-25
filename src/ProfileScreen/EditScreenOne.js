import React  from "react";
import {AppRegistry, Alert} from "react-native";
import {Container,Header, Content, Left, Body,Title,Card,CardItem,Right,Icon,Button, Text} from "native-base";
export default class EditScreenOne extends React.Component{
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
