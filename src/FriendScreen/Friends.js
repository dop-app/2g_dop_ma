import React  from "react";
import { AppRegistry, Image } from "react-native";
import { connect } from 'react-redux';
import { Container, Header, Content, List, ListItem, Left, Body, Title, Card, CardItem, Right, Icon, Button, Text, View, DeckSwiper, Thumbnail } from "native-base";
import { StackNavigator } from "react-navigation";
import { loadData } from '../../redux/actions/friends';

var amigos = [
  {
    name: 'Osmar',
    msg: 'Desarrollador, con un gusto particular en el Software libre y abierto.',
    image: 'https://avatars2.githubusercontent.com/u/11141363?s=460&v=4',
  },
  {
    name: 'Alejandro',
    msg: 'Desarrollador, con un gusto particular por Apple.',
    image: 'https://avatars2.githubusercontent.com/u/11141363?s=460&v=4',
  },
];

class Friends extends React.Component {
  /* componentDidMount(){
  Alert.alert("Opps, Looks like you are not signed in");
  }*/
  constructor(props){
      super(props);
      this.state = this.props.data;
      this.idUser = this.props.idUser;
      this.props.onLoadData(this.idUser);
  }
    componentWillReciveProps(nextProps){
	console.log('recive new props friends',nextProps);
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
	}else{
	    return(
		<Container>
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
	onLoadData:(id)=>{dispatch(loadData(id));}
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Friends);
