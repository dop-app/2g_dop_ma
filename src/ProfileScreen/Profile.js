import React  from "react";
import {AppRegistry, Alert} from "react-native";
import {Container,Header, Content, Left, Body,Title,Card,CardItem,Right,Icon,Button, Text} from "native-base";
import {StackNavigator} from "react-navigation";
import EditScreenOne from "./EditScreenOne.js";
export default class Profile extends React.Component {
    componentDidMount(){
	Alert.alert("Opps, Looks like you are not signed in"); 
    }
    render() {
	return(
		<Container>
		<Content padder>
		<Card>
		<CardItem>
		<Icon active name="paper-plane" />
		<Text>Show info user</Text>
		</CardItem>
		</Card>
		<Button full rounded primary
	    style={{ marginTop:10}}
	    onPress={()=> this.props.navigation.navigate("EditScreenOne")}>
		<Text>
		edit Profile screen
	    </Text>
		</Button>
		</Content>
		</Container>


	);	
    }

}

Profile.navigationOptions = ({ navigation }) => ({
    header: (
	    <Header>
	    <Left>
	    <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
	    <Icon name="menu" />
	    </Button >
	    </Left>
	    <Body>
	    <Title>Perfil</Title>
	    </Body>
	    <Right/>
	    </Header>
    )

});
