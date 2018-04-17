import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider, Query, graphql  } from "react-apollo";

const client = new ApolloClient({
    uri: 'http://192.168.0.106:5000/graphql', // ''http://35.227.46.47/graphql',
})

const PLEASURE_QUERY = gql`
query pleasure{
  pleasureById(id:1){
    name,
    description   }
}
`

class Pleasure extends React.Component{
  render(){
      const {data}=this.props;
      const {loading, pleasureById} = data;
      if(loading){
  	  return <ActivityIndicator />;
      }
      return (
  	  <View style={styles.container}>
  	    <Text style={styles.titleText}>
  	      {pleasureById.name}:{pleasureById.description}
  	    </Text>
  	  </View>
      );
  }
}

const PleasureWithData = graphql(PLEASURE_QUERY)(Pleasure);

export default class App extends React.Component {
  render() {
  	return (
  		<ApolloProvider client={client}>
  		<PleasureWithData />
  		</ApolloProvider>
  	);
  }
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
  	backgroundColor: '#fff',
  	alignItems: 'center',
  	justifyContent: 'center',
  },
  titleText: {
  	fontSize: 53,
  	fontWeight: 'bold',
  	alignItems: 'center',
  	justifyContent: 'center',
  },
});
