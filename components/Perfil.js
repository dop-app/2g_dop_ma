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
    uri: 'http://192.168.0.104:5000/graphql', // ''http://35.227.46.47/graphql',
})

const PLEASURE_QUERY = gql`
query pleasure{
  pleasureById(id:1){
    name,
    description   }
}
`

const PleasureWithData = ()=>(
    <Query
      query={PLEASURE_QUERY}>
      {({loading,error,data:{pleasureById}})=>{
	  if(loading) return <Text>Cargando...</Text>
	      return <View >
	      <Text style={styles.titleText}>{pleasureById.name}</Text>
		  <Text> {pleasureById.description}</Text>
	      </View>
	  }
      }
    </Query>
)

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
