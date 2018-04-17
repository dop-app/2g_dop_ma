import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider, Query, Mutation  } from "react-apollo";

const client = new ApolloClient({
    uri: 'http://35.227.46.47:5000/graphql',
})

const PLEASURE_QUERY = gql `
query pleasure{
  pleasureById(id:1){
    name,
    description   }
}
`
const PLEASURE_MUTATION = gql `
mutation addPleasure(
$name:String!,
$description:String!,
$subcategory_id:Int!,
$user_id:Int
){
createPleasure(pleasure:{
name:$name,
description:$description,
subcategory_id:$subcategory_id,
user_id:$user_id
}){
  name,
  description
}
}
`


const SUBCATEGORY_QUERY = gql`
query listSubcategories{
  allSubcategories{
     id,
     name,
     description,
     category{
       name
     }
  }
}
`
const USER_DATA = gql `
query userData($id:Int!){
  userById(id: $id){
    name,
    email,
    gender,
    picture,
    age
  }
}
`

const UserInfo = ({id}) =>(
  <Query query={USER_DATA}
   variables={{id}}>
    {({loading,error,data:{userById}})=>{
      if(error) return <Text>Intentelo más tarde...</Text>
      if(loading) return <Text>Cargando...</Text>

      return(
        <View>
          <Text>Información</Text>
          <Text>{userById.name}</Text>
          <Text>{userById.email}</Text>
          <Text>{userById.gender}</Text>
          <Text>{userById.age}</Text>
        </View>
      );
    }}

  </Query>
);

const PleasureWithData = ()=>(
  <Query
    query={PLEASURE_QUERY}>
    {({loading,error,data:{pleasureById}})=>{
      if(loading) return <Text>Cargando...</Text>
        return (
          <View >
            <Text style={styles.titleText}>{pleasureById.name}</Text>
            <Text> {pleasureById.description}</Text>
          </View>
        );
      }
    }
  </Query>
)

class Subcategorie extends React.Component{
    render() {
	const {id,name,description} = this.props; 
	return (
	    <Text>{id}:{name}-{description}</Text>
	);
    }
}

const SubcategoriesList = ()=>(
    <Query query={SUBCATEGORY_QUERY}>
      {({loading,error,data:{allSubcategories}})=>{
	  if(error) return <Text>Error...</Text>;
	  if(loading) return <Text>Cargando;</Text>;
	  return(allSubcategories.map(({id,name,description,category}) =>(
	      <Subcategorie id={id} name={name} description={description + category.name}/>
	  ))

		);
      }}
    </Query>
);

class Perfil extends React.Component {
    render() {
  	return (
  	    <ApolloProvider client={client}> 
	      <SubcategoriesList/>
	    </ApolloProvider>
  	);
    }
};

class Perfil extends React.Component {
  static navigationOptions = {
    title: 'Perfil',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Menu" onPress={this._showMenuApp} />
        <StatusBar barStyle="default" />
        <Text></Text>
        <ApolloProvider client={client}>
  	      <PleasureWithData/>
  	    </ApolloProvider>
      </View>
    );
  }

  _showMenuApp = () => {
    this.props.navigation.navigate('Home');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Perfil;
