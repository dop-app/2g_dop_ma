import React  from "react";
import {Container,Header, Content, Left, Body,Title,Card,CardItem,Right,Icon,Button, Text} from "native-base";

export class Pleasure extends React.Component{
    render(){
	const {idPleasure,subcategory,name,description} = this.props;
	return (
	    <Content>
	      <Text>{name}</Text>
	      <Text>{subcategory}</Text>
	      <Text>{description}</Text>
	    </Content>

	);
    }
    
}
export class PleasureList extends React.Component{
    render(){
	const {pleasureList} = this.props;
	const placeres = pleasureList.map((obj,i)=>(
	    
	    <CardItem key={i}>
	      <Pleasure key={i}  idPleasure={obj.id} name ={obj.name} subcategory={obj.subcategory.name} description={obj.description}/>
	    </CardItem>
	));
	return(
	    <Card>
	      {placeres}
	    </Card>	    
	);
    }
}
