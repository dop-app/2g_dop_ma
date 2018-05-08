import React  from "react";
import { AppRegistry, Image } from "react-native";
import { connect } from 'react-redux';
import { Container, Header, Content, Left, Body, Title, Card, CardItem, Right, Icon, Button, Text, View, DeckSwiper, Thumbnail } from "native-base";
import { StackNavigator } from "react-navigation";

const cards = [
  {
    text: 'Card Dop',
    name: 'Dop-Black',
    // image: uri:'https://avatars2.githubusercontent.com/u/11141363?s=460&v=4',
    image: require('../assets/dop_logo_negro.png'),
  },
  {
    text: 'Card Otra',
    name: 'Dop-bad',
    image: require('../assets/dop_logo.png'),
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
          dataSource={cards}
          renderItem={item =>
            <Card style={{ elevation: 3 }}>
              <CardItem>
                <Left>
                  <Thumbnail source={item.image} />
                  <Body>
                    <Text>{item.text}</Text>
                    <Text note>NativeBase</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image style={{ height: 300, flex: 1 }} source={item.image} />
              </CardItem>
              <CardItem>
                <Icon name="heart" style={{ color: '#ED4A6A' }} />
                <Text>{item.name}</Text>
              </CardItem>
            </Card>
          }
        />
        <Button full rounded primary
          style={{ marginTop:10}}
          onPress={()=> this.props.navigation.navigate("EditScreenOne")}>
          <Text>
            edit Profile screen
          </Text>
        </Button>
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
