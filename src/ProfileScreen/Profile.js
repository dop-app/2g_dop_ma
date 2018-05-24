import React  from "react";
import {AppRegistry, Image, StatusBar } from "react-native";
import { connect } from 'react-redux';
import {Container,Header, Content, Left, Body,Title,Card,CardItem,Right,Icon,Button, Text} from "native-base";
import {StackNavigator} from "react-navigation";
import EditScreenOne from "./EditScreenOne.js";
import { loadData } from '../../redux/actions/userInfo';
import {PleasureList} from './Pleasure';



class Profile extends React.Component {
    constructor(props){
	super(props);
	this.state = this.props.data; 
	this.idUser = this.props.idUser;
	this.props.onLoadData(this.idUser);
    }
    componentWillReceiveProps(nextProps){
	console.log('receive new props',nextProps);
	this.setState(nextProps.data);
    }
    render() {
	if(this.state.isReady){
	    const pleasuresInfo= this.state.pleasuresReady?(
		<PleasureList pleasureList={this.state.pleasures}/>
	    ):(
		<Card>
		  <CardItem>
		    <Text>Ingrese un nuevo gusto</Text>
		  </CardItem>
		</Card>
	    );
	    return(
		<Container>
		  <StatusBar hidden={true}/>
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
      			  source={{uri: this.state.urlImage }}
      			  style={{height: 200, width: null, flex: 1}}
      			  />
      		      </CardItem>
      		      <CardItem>
      			<Text>{ this.state.name }</Text>
		      </CardItem>
		      <CardItem>
			<Text>{ this.state.age }</Text>
		      </CardItem>
		      <CardItem>
			<Icon active name="paper-plane" />
			<Text>{ this.state.email }</Text>
		      </CardItem>
		      <CardItem>
			<Text>{ this.state.gender }</Text>
      		      </CardItem>
      		    </Card>
		    {pleasuresInfo}
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
	}else{
	    return (
		<Container>
		  <StatusBar hidden={true}/>
		  <Header>
      		    <Left>
      		      <Title style={{ fontFamily: 'Comfortaa_regular'}}>dop</Title>
      		    </Left>
      		    <Body>
      		      <Title>Perfil</Title>
      		    </Body>
		  </Header>
		  <Content padder>
		    <Text>Cargando...</Text>
		  </Content>
		</Container>
	    );
	}
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
	isLoggedIn: state.auth.isLoggedIn,
	idUser: state.auth.id,
	data: state.userInfo
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
	onLoadData: (id) => { dispatch(loadData(id)); }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
