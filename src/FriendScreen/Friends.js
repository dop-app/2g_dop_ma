import React  from "react";
import { AppRegistry, Image, StatusBar} from "react-native";
import { connect } from 'react-redux';
import { Container, Header, Content, List, ListItem, Left, Body, Title, Card, CardItem, Right, Icon, Button, Text, View, DeckSwiper, Thumbnail } from "native-base";
import { StackNavigator } from "react-navigation";
import { loadDataFriends } from '../../redux/actions/friends';

class Friends extends React.Component {
    /* componentDidMount(){
       Alert.alert("Opps, Looks like you are not signed in");
       }*/
    constructor(props){
	super(props);
	this.state = this.props.data;
	this.idUser = this.props.idUser;
	this.props.onLoadDataFriends(this.idUser);
    }
    componentWillReceiveProps(nextProps){
	console.log('receive new props friends',nextProps);
	this.setState(nextProps.data);
    }
    render() {
	if(this.state.isReady == 'true'){
	    return(
		<Container>
		  <StatusBar hidden={true}/>
		  <Header>
		    <Left>
		      <Title style={{ fontFamily: 'Comfortaa_regular'}}>dop</Title>
		    </Left>
		    <Body>
		      <Title>Amigos</Title>
		    </Body>
		  </Header>
		  <Content>
		    <List dataArray={this.state.data}
			  renderRow={item =>
				     <ListItem avatar>
					   <Left>
						 <Thumbnail source={{ uri: item.picture}} />
					       </Left>
					       <Body>
						     <Text>{item.name}</Text>
							 <Text note>{item.age}</Text>
						   </Body>
						   <Right>
							 <Text>Ver</Text>
						       </Right>
					 </ListItem>
				     }>
		    </List>
		  </Content>
		</Container>
	    );
	}else if(this.state.isReady == 'none'){
	    return(
		<Container>
		  <StatusBar hidden={true}/>
		  <Header>
		    <Left>
		      <Title style={{ fontFamily: 'Comfortaa_regular'}}>dop</Title>
		    </Left>
		    <Body>
		      <Title>Amigos</Title>
		    </Body>
		  </Header>
		  <Content>
		    <Text>Desafortunadamente usted no tiene contactos</Text>
		  </Content>
		</Container>
	    );
	}else{
	    return(
		<Container>
		  <StatusBar hidden={true}/>
		  <Header>
		    <Left>
		      <Title style={{ fontFamily: 'Comfortaa_regular'}}>dop</Title>
		    </Left>
		    <Body>
		      <Title>Amigos</Title>
		    </Body>
		  </Header>
		  <Content>
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
      data: state.friends
  };
};
const mapDispatchToProps = (dispatch)=>{
    return {
	onLoadDataFriends:(id)=>{dispatch(loadDataFriends(id));}
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Friends);
