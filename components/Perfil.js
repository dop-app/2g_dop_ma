import React, { Component } from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { NativeRouter,
  Route,
  Link,
  BackButton,
  Promt,
  withRouter,
  Redirect } from 'react-router-native'

import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider, Query, graphql  } from "react-apollo";

import type { RouterHistory } from 'react-router'
import Menu from "./Menu"

const client = new ApolloClient({
    uri: 'http://35.227.46.47:5000/graphql', // ''http://35.227.46.47/graphql',
})

const PLEASURE_QUERY = gql`
query pleasure{
  pleasureById(id:1){
    name,
    description   }
}
`

class Pleasure extends Component {
  render(){
    const {data}=this.props
    const {loading, pleasureById} = data
    if(loading){
        return <ActivityIndicator />
    }
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          {pleasureById.name}:{pleasureById.description}
        </Text>

        <Text>estoy desde el Perfil.</Text>
      </View>
    )
  }
}

const PleasureWithData = graphql(PLEASURE_QUERY)(Pleasure)

class Perfil extends React.Component {
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

export default Perfil
