import React  from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { connect } from 'react-redux';
import { Container, Header, Content, Left, Body, Title, Card, CardItem, Right, Icon, Button, Text, View, DeckSwiper, Thumbnail } from "native-base";
import { StackNavigator } from "react-navigation";
import { loadData, matchUser } from '../../redux/actions/match';

class Match extends React.Component {
  /* componentDidMount(){
  Alert.alert("Opps, Looks like you are not signed in");
  }*/
    constructor(props){
	super(props);
	this.state = this.props.data;
	this.idUser = this.props.idUser;
	this.props.onLoadData(this.idUser);
    };
    componentWillReceiveProps(nextProps){
	console.log('receive new props',nextProps);
	this.setState(nextProps.data);
    }
    userAcept(user){
	console.log("estado",this.state);
	var newCards = this.state.cards;
	console.log(newCards);
	var index = newCards.indexOf(user);
	if ( index > -1) {
	    newCards.splice(index, 1);
	}
	console.log('newCards',newCards);
	this.props.onMatchUser(this.idUser,user.id,1,newCards); 
    }
    userDeny(user){
	console.log("estado",this.state);
	var newCards = this.state.cards;
	console.log(newCards);
	var index = newCards.indexOf(user);
	if ( index > -1) {
	    newCards.splice(index, 1);
	}
	console.log('newCards',newCards);
	this.props.onMatchUser(this.idUser,user.id,2,newCards);
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
		      <Title>Emparejador</Title>
		    </Body>
		  </Header>
		  <View>
		    <DeckSwiper
		      onSwipeRight={item=> this.userDeny(item)}
		      onSwipeLeft={item=> this.userAcept(item)}
		      looping={false}
		      dataSource={this.state.cards}
		      renderItem={item =>
				  <Card style={{ elevation: 3 }}>
					<CardItem>
					      <Left>
						    <Thumbnail source={{uri: item.image}} />
							<Body>
							      <Text>{item.name}</Text>
							    </Body>
						  </Left>
					    </CardItem>
					    <CardItem cardBody>
						  <Image style={{ height: 300, flex: 1 }} source={{uri: item.image}} />
						</CardItem>
						<CardItem>
						      <Icon name="heart" style={{color: '#ED4A6A'}} />
							  <Text>{item.age}</Text>
						    </CardItem>
						    
						    <CardItem>
							  <Text>{item.gender}</Text>
							</CardItem>
				      </Card>
				  }
				  />
		  </View>
		</Container>
	    );
	}else if( this.state.isReady == 'none'){
	    return(
		<Container>
		  <StatusBar hidden={true}/>
		  <Header>
		    <Left>
		      <Title style={{ fontFamily: 'Comfortaa_regular'}}>dop</Title>
		    </Left>
		    <Body>
		      <Title>Emparejador</Title>
		    </Body>
		  </Header>
		  <Content>
		    <Text>No encontramos coincidencia</Text>
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
		      <Title>Emparejador</Title>
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
	data: state.match
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
	onLoadData: (id) => { dispatch(loadData(id)); },
	onMatchUser: (id,user,state,cards) =>{ dispatch(matchUser(id,user,state,cards));}
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Match);
