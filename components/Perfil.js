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
const SUBCATEGORY_QUERY = gql `
query{
  allSubcategories{
     category{
      name
     }
     id,
     name,
     description
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

class Subcategories extends React.Component{
  constructor(props){
    super(props);
    this.state = {subcategory:''};
  }
  updateSubcategory=(subcategory)=>{
    this.setState({subcategory: subcategory});
  };
  render() {
    return (
      <Picker
      selectedValue={this.state.subcategory}
      style={{height:50,width:100}}
      onValueChange={this.updateSubcategory}>
      <Picker.Item label="Prueba" value="test"/>;
      </Picker>
    );
  }
}

const subcategoriesList = ()=>(
  <Query query={SUBCATEGORY_QUERY}>
    {({loading,error,data})=>{
      if(loading){
        return <Text>Cargando...</Text>;
      }
      if(error){
        return <Text>Error </Text>;
      }
      return (
        <View>
        {data.allSubcategories.map(subcategory=>(
          <Text>subcategory.name</Text>)
        )}
        </View>
      );
    }}
  </Query>
)

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

export default Perfil
