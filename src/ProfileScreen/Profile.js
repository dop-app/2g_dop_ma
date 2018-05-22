import React  from "react";
import {AppRegistry, Image} from "react-native";
import { connect } from 'react-redux';
import {Container,Header, Content, Left, Body,Title,Card,CardItem,Right,Icon,Button, Text} from "native-base";
import {StackNavigator} from "react-navigation";
import EditScreenOne from "./EditScreenOne.js";
import { loadData } from '../../redux/actions/userInfo';

class Profile extends React.Component {
    constructor(props){
	super(props);
	this.state ={
	    isReady: false,
	    urlImage: '',
	    name: '',
	    age: ''
	};
	this.props.onLoadData(1);
    }
    render() {
	return(
	    <Container>
	      <Header>
      		<Left>
      		  <Title style={{ fontFamily: 'Comfortaa_regular'}}>dop</Title>
      		</Left>
      		<Body>
      		  <Title>Perfil</Title>
      		</Body>
	      </Header>
	      <Content padder>
      		<Card>
      		  <CardItem cardBody>
      		    <Image
      		      source={{uri:'https://avatars2.githubusercontent.com/u/11141363?s=460&v=4'}}
      		      style={{height: 200, width: null, flex: 1}}
      		      />
      		  </CardItem>
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

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onloadData: (id) => { dispatch(loadData(id)); }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
