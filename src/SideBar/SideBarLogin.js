import React from "react";
import {AppRegistry, Image, StatusBar} from "react-native";
import {Container,Content,Text,List,ListItem} from "native-base";
const routes =  ["Login", "Ayuda"];
export default class SideBar extends React.Component{
    render() {
	return(
	    <Container>
	      <Content>
		<Image
		  source={require('../assets/dop_logo_negro.png')}
		  style={{
		      width:200,
		      height:140,
		      alignSelf:"center",
		      justifyContent: "center",
		      alignItems: "center"
		  }}
		  >
		</Image>
		<List
		  dataArray={routes}
		  renderRow={data => {
		      return (
			  <ListItem
			    button
			    onPress={() => this.props.navigation.navigate(data)}>
			    <Text style={{ fontFamily: 'Comfortaa_regular'}}>{data}</Text>
			  </ListItem>
		      );
		  }}
		/>
		</Content>
		</Container>
	);
    }

}
