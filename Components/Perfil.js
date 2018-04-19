import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider, Query, Mutation  } from "react-apollo";
import {PLEASURE_QUERY,PLEASURES_QUERY,SUBCATEGORY_QUERY,PLEASURE_MUTATION} from './graphql/Pleasures.js';
import {USER_DATA} from './graphql/Users.js';

const client = new ApolloClient({
    uri: 'http://35.227.46.47:5000/graphql',
})

class ShowUserInfo extends React.Component {
    render(){
	const {name,email,gender,age,picture} = this.props;
	return(
	    <View>
              <Image
		style={{width: 50, height: 50}}
		source={{uri:picture}}
		/>
	      <Text>Información</Text>
	      <Text>{name}</Text>
	      <Text>{email}</Text>
	      <Text>{gender}</Text>
	      <Text>{age}</Text>
	    </View>
	);
    }
}
class PleasureView extends React.Component{
    render(){
	const {name,description,subcategory}= this.props;
	return (
	    <View >
	      <Text>{subcategory}</Text>
	      <Text style={styles.titleText}>{name}</Text>
	      <Text> {description}</Text>
	    </View>
	);
    }
}
const UserInfo = () =>(
    <Query query={USER_DATA}
	   variables={{id:1}}>
      {({loading,error,data:{userById}})=>{
	  if(error) return <Text>Intentelo más tarde...</Text>
	      if(loading) return <Text>Cargando...</Text>

	  return(
	      <ShowUserInfo
		name={userById.name}
		email={userById.email}
		gender={userById.gender}
		age={userById.age}
		picture={userById.picture}
		/>
	  );
      }}

    </Query>
);

const PleasuresWithData = ()=>(
    <Query
      query={PLEASURES_QUERY}
      variables={{id:1}}>
      {({loading,error,data:{pleasureByUser}})=>{
	  if(error) return <Text>Error!</Text>

	  if(loading) return <Text>Cargando...</Text>

          return (pleasureByUser.map(({name,description,subcategory})=>(
	      <PleasureView name={name} description={description} subcategory={subcategory.name}/>
	  ) ));
      }}
    </Query>
);

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

class  AddPleasure extends React.Component{
    constructor(props){
	super(props);
	this.state = {name:'',
		      description:'',
		      subcategory_id:'',
		      user_id:''
		     };
    }
    render(){
	return(
	    <Mutation mutation={PLEASURE_MUTATION}>
	      {(addPleasure,{loading, error, data})=>(
		  <View>
		    <TextInput
		      multiline = {false}
		      style={{height: 100}}
		      placeholder="nombre"
		      onSubmitText={(text) => {
			  this.setState({text});

			  }
		      }
		      />
		      <TouchableOpacity
			style = {styles.submitButton}
			onPress ={
			    ()=>{
				addPleasure({variables:{name: this.state.text}});
			    }
			}
			>
			<Text > Submit </Text>
		      </TouchableOpacity>
		      {error && <Text>Intentelo más tarde...</Text>}
		      {loading && <Text>Cargando...</Text>}
		  </View>
	      )}
	    </Mutation>
	);
    };
};



export default class Perfil extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Perfil',
    drawerIcon: () => (
      <Image
        source={{uri: `https://dummyimage.com/60x60/000/fff.jpg&text=1`}}
        style={{width: 30, height: 30, borderRadius: 15}}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ApolloProvider client={client}>
        <UserInfo/>
        </ApolloProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',  // flex-start, center, flex-end, and stretch
    justifyContent: 'flex-start', // flex-start, center, flex-end, space-around, space-between and space-evenly
  },
})
