
import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import store from './redux';
import Application from './src/Application';

export default class App extends React.Component {
  render() {
    return(
	    <Provider store={store}>
	      <Application />
	    </Provider>
    );
  }
}
AppRegistry.registerComponent('App',()=>APP);
