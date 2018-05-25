import React from "react";
import {AppRegistry, Image, StatusBar} from "react-native";
import {Container,Content,Text,List,ListItem} from "native-base";
const routes =  ["Perfil", "Buscar","Amigos","Citas","Salir"];
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth';

class SideBar extends React.Component{
    userLogout (e){
	this.props.onLogout();
	e.preventDefault();
	this.props.navigation.navigate('Salir');
    }
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
		      if(data == 'Salir'){
			  return(<ListItem
				       button
				       onPress={(e) => this.userLogout(e)}>
				 <Text style={{ fontFamily: 'Comfortaa_regular'}}>{data}</Text>
				 </ListItem>);
		      }else{
			  return (
			      <ListItem
				button
				onPress={() => this.props.navigation.navigate(data)}>
				<Text style={{ fontFamily: 'Comfortaa_regular'}}>{data}</Text>
			      </ListItem>
			  );
		      }
		  }}
	    
		/>
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
        onLogout: () => { dispatch(logout()); }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(SideBar);
