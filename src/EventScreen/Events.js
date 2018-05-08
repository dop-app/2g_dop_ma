import React  from "react";
import { AppRegistry, Image } from "react-native";
import { connect } from 'react-redux';
import { Container, Header, Content, List, ListItem, Left, Body, Title, Card, CardItem, Right, Icon, Button, Text, View, DeckSwiper, Thumbnail } from "native-base";
import { StackNavigator } from "react-navigation";

var citas = [
  {
    cita : "Primera",
    lugar : "Unicentro",
    fecha : "2018-06-20 16:00",
    personas : [
      'Miguel',
      'Valentina'
    ],
    estado : "Activo"
  },
  {
    cita : "Otra",
    lugar : "Galerias",
    fecha : "2018-06-21 14:00",
    personas : [
      'Osmar',
      'Alejandro'
    ],
    estado : "Activo"
  },
  {
    cita : "Otra mas",
    lugar : "Universidad Nacional de Colombia",
    fecha : "2018-06-22 15:00",
    personas : [
      'Alguien',
      'Alguien mas',
      'Y otro mas'
    ],
    estado : "Activo"
  },
];

class Citas extends React.Component {
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
          <Title>Eventos</Title>
        </Body>
      </Header>
      <Content>
        <List dataArray={citas}
          renderRow={item =>
            <ListItem>
              <Body>
                <Text>{item.cita}</Text>
                <Text note>¿Donde?: {item.lugar}</Text>
                <Text note>¿Cuando?: {item.fecha}</Text>
                <Text note>¿Quienes?: </Text>
                  <List dataArray={item.personas}
                    renderRow={item =>
                      <ListItem>
                        <Body>
                          <Text note>{item}</Text>
                        </Body>
                      </ListItem>
                    }>
                  </List>
                <Text note>¿Estado?: {item.estado}</Text>
              </Body>
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

export default connect(mapStateToProps)(Citas);
