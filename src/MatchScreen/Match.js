import React  from "react";
import { AppRegistry, Image } from "react-native";
import { connect } from 'react-redux';
import { Container, Header, Content, Left, Body, Title, Card, CardItem, Right, Icon, Button, Text, View, DeckSwiper, Thumbnail } from "native-base";
import { StackNavigator } from "react-navigation";
import { loadData } from '../../redux/actions/match';

var cards = [
  {
    text: 'Card Dop',
    name: 'Dop-Black',
    image: 'https://avatars2.githubusercontent.com/u/11141363?s=460&v=4',
  },
  {
    text: 'Card Otra',
    name: 'Dop-bad',
    image: 'https://avatars2.githubusercontent.com/u/11141363?s=460&v=4',
  },
];

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
    render() {
	if(this.state.isReady){
	    return(
		<Container>
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
		      onSwipeRight={item=> console.log('right',item)}
		      onSwipeLeft={item=> console.log('left',item)}
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
	}else{
	    return(
		<Container>
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
	onLoadData: (id) => { dispatch(loadData(id)); }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Match);
