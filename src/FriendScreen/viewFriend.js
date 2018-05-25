import React  from "react";
import { connect } from "react-redux";
import {Container,Header, Content, Left, Body,Title,Card,CardItem,Right,Icon,Button, Text, List,ListItem} from "native-base";
class EditPleasures extends React.Component{
    render() {
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
        <Card>
          <CardItem cardBody>
            <Image
              source={{uri: this.state.urlImage}}
              style={{height: 200, width: null, flex: 1}}
              />
          </CardItem>
          <CardItem>
            <Text>Nombre</Text> //nombre amigo
          </CardItem>
          <CardItem>
            <Text>edad</Text>  //edad amigo
          </CardItem>
          <CardItem>
            <Icon active name="paper-plane" />
            <Text>Email</Text> //email amigo
          </CardItem>
          <CardItem>
            <Text>genero</Text> //genero amigo
          </CardItem>
        </Card>
      </Content>

      <Body>
        <Title>Gustos</Title>
      </Body>
    <Content padder>
      <Card>
      <List containerStyle={{marginBottom: 20}}> //Lista para gustos
        {
          list.map((l, i) => (                    //{gustosUsuario.map(gusto =>(
            <ListItem                             //<ListItem>{gusto.name}</List.Item>
              roundAvatar                         //))}
              avatar={{uri:l.avatar_url}}
              key={i}
              title={l.name}
            />
          ))
        }
      </List>
      </Card>
    </Content>
		</Container>
	);
    }


}

const mapStateToProps = (state, ownProps) => {
    return {
	isLoggedIn: state.auth.isLoggedIn,
	idUser: state.auth.id,
	data: state.userInfo
    };
};
/*
  const mapDispatchToProps = (dispatch) => {
  return {
  onLoadData: (id) => { dispatch(loadData(id)); }
  };
  };
*/
export default connect(mapStateToProps)(EditPleasures);
