import React from 'react';
import { connect } from 'react-redux';
import Expo from "expo";
import LoginScreen from './LoginScreen/index.js';
import ProfileScreen from './ProfileScreen/index.js';
import MatchScreen from './MatchScreen/index.js';
import GlobalFont from 'react-native-global-font';

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
	    Comfortaa_regular: require("./fonts/Comfortaa-Regular.ttf"),
	    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
	    Ionicons: require("native-base/Fonts/Ionicons.ttf")
	});
	this.setState({isReady:true});
	GlobalFont.applyGlobal('Comfortaa_regular');
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
