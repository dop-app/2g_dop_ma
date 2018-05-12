import React  from "react";
import { AppRegistry, Image } from "react-native";
import { connect } from 'react-redux';
import { Container, Header, Content, Left, Body, Title, Card, CardItem, Right, Icon, Button, Text, View, DeckSwiper, Thumbnail } from "native-base";
import { StackNavigator } from "react-navigation";

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
  }
  render() {
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
          looping={false}
          dataSource={cards}
          renderItem={item =>
            <Card style={{ elevation: 3 }}>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: item.image}} />
                  <Body>
                    <Text>{item.text}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image style={{ height: 300, flex: 1 }} source={{uri: item.image}} />
              </CardItem>
              <CardItem>
                <Icon name="heart" style={{color: '#ED4A6A'}} />
                <Text>{item.name}</Text>
              </CardItem>
            </Card>
          }
        />
      </View>
    </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

export default connect(mapStateToProps)(Match);
