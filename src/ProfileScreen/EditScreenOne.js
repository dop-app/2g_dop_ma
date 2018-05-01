import React  from "react";
import {AppRegistry, Alert} from "react-native";
import {Container,Header, Content, Left, Body,Title,Card,CardItem,Right,Icon,Button, Text} from "native-base";
export default class EditScreenOne extends React.Component{
    static navigationOptions = ({navigation}) => ({
	header: (
		<Header>
		<Left>
		<Button transparent onPress={() => navigation.goBack() }>
		<Icon name="arrow-back"/> 
		</Button>
		</Left>
		<Body>
		<Title>Editar perfil </Title>
		</Body>
		<Right />
		</Header>
	)
    });
    render() {
	return (
		<Container>
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
