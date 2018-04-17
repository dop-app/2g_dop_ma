import React from 'react';
import { View,Text,Picker,StyleSheet} from 'react-native';


export default class PickerList extends React.Component {
    constructor(props){
	super(props),
	this.state = {textSelect:'a',textList:['a','b','c']};
    }
    render() {
	let itemsPicker = this.state.textList.map((v,i) =>{
	    return <Picker.item  key={i} value={v} label={v}/>;
	} );
	return(
	    <View>
	      <Picker sleectedValue={this.state.textSelect}
		      style={{height:50,width:100}}
		      onValueChange={(text) =>this.setState({textSelect:text}) } >
		{itemsPicker}
	      </Picker>
	      <Text style = {styles.text}>{this.state.textSelect}</Text>
	    </View>
	);
    }    
}
const styles = StyleSheet.create({
    text: {
	fontSize: 30,
	alignSelf: 'center',
	color: 'red'
    }
})
