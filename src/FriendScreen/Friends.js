import React  from "react";
import { AppRegistry, Image } from "react-native";
import { connect } from 'react-redux';
import { Container, Header, Content, List, ListItem, Left, Body, Title, Card, CardItem, Right, Icon, Button, Text, View, DeckSwiper, Thumbnail } from "native-base";
import { StackNavigator } from "react-navigation";

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
  }
  render() {
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
        <List dataArray={amigos}
          renderRow={item =>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: item.image}} />
              </Left>
              <Body>
                <Text>{item.name}</Text>
                <Text note>{item.msg}</Text>
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
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

export default connect(mapStateToProps)(Friends);
