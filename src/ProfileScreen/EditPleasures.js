import React  from "react";
import { ListView } from 'react-native';
import { connect } from "react-redux";
import {Container,Header, Content, Left, Body,Title,Card,CardItem,Right,Icon,Button, List, ListItem, Text, Textarea, Form} from "native-base";

var datas = [
  'Imposible',
  'DJ Tiesto',
];

class EditPleasures extends React.Component{
	constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render() {
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		return (
	    <Container>
	      <Header>
					<Left>
					  <Button transparent onPress={() => this.props.navigation.goBack() }>
					    <Icon name="arrow-back"/>
					  </Button>
					</Left>
					<Body>
					  <Title>Editar/Agregar gusto</Title>
					</Body>
					<Right />
	      </Header>
	      <Content padder>
					<Button full onPress={() => alert("Nuevo Gusto")}>
						<Text>Nuevo Gusto <Icon active name="star" /> </Text>
					</Button>
          <List
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem>
                <Text> {data} </Text>
              </ListItem>}
            renderLeftHiddenRow={data =>
              <Button full onPress={() => alert(data)}>
                <Icon active name="information-circle" />
              </Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
            leftOpenValue={75}
            rightOpenValue={-75}
          />
        </Content>
	    </Container>
		);
  }
}

export class EditPl extends React.Component{
  render(){
		return (
			<Content>
				<Form >
					<Item floatingLabel>
						<Label>Nombre</Label>
						<Input />
					</Item>
					<Item floatingLabel>
						<Label>Descripción</Label>
						<Input />
					</Item>
					<Item floatingLabel>
						<Label>Subcategoria</Label>
						<Input />
					</Item>
					<Button ><Text style={{ fontFamily: 'Comfortaa_regular'}}>Save</Text></Button>
				</Form>
			</Content>
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
