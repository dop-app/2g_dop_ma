import React from 'react';
import { View,Text,Picker,StyleSheet} from 'react-native';


class PickerList extends React.Component {
    constructor(props){
	super(props),
	this.state = {text:''};
    }
    updateText = (text) => {
	this.setState({text:text});
    }
    render() {
	return(
	    <View>
	      <Picker sleectedValue={this.state.text}
		      onValueChange={this.updateText} >
		<Picker.Item label="Test" value="1"/>
		<Picker.Item label="prueba" value="2"/>
	      </Picker>
	      <Text>{this.state.text}</Text>
	    </View>
	);
    }    
}
export default PickerList;

