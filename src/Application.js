import React from 'react';
import { connect } from 'react-redux';
import Expo from "expo";
import LoginScreen from './LoginScreen/index.js';
import ProfileScreen from './ProfileScreen/index.js';

// create our store
//const store = createStore()

class Application extends React.Component {
    constructor(){
	super();
	this.state = {
	    isReady:false
	};
    }
    async componentWillMount(){
	await Expo.Font.loadAsync({
	    Roboto: require("native-base/Fonts/Roboto.ttf"),
	    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
	    Ionicons: require("native-base/Fonts/Ionicons.ttf")
	});
	this.setState({isReady:true});
    }
    render() {
	if(!this.state.isReady){
	    return <Expo.AppLoading />;
	}else{
	    if(this.props.isLoggedIn){
		return   <ProfileScreen />;
	    }else{
		return   <LoginScreen/>;
	    }
	}
    }

}

const mapStateToProps = (state,ownProps)=>{
    return {
	isLoggedIn: state.auth.isLoggedIn
    };
}

export default connect(mapStateToProps)(Application);
