import React  from "react";
import {Container,Header, Content, Left, Body,Title,Card,CardItem,Right,Icon,Button, List, ListItem, Text} from "native-base";

export class Pleasure extends React.Component{
  render(){
		const {idPleasure,subcategory,name,description} = this.props;
		return (
		    <Content>
					<Text>{description} | {subcategory}</Text>
			    <Text>Nombre: {name}</Text>
		    </Content>
		);
  }
}

export class PleasureList extends React.Component{
	render(){
		const {pleasureList} = this.props;
		const placeres = pleasureList.map((obj,i)=>(
	    <ListItem key={i}>
	      <Pleasure key={i}
					idPleasure={obj.id}
					name ={obj.name}
					subcategory={obj.subcategory.name}
					description={obj.description}/>
	    </ListItem>
		));
		return(
	    <List>
	      {placeres}
	    </List>
		);
  }
}
