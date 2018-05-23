import { USER_DATA } from '../graphql/Users';
import { PLEASURES_QUERY } from '../graphql/Pleasures';
import { getData } from '../graphql';

export function loadData(id,dispatch){
    return async function(dispatch){
	if(id != null){
	    const variables ={
		id: id
	    };
	    var data = await getData(USER_DATA,variables);
	    if(data != null){
		dispatch(loadSuccess(data.userById));
	    }
	    var dataP = await getData(PLEASURES_QUERY,variables);
	    if(dataP != null){
		dispatch(loadPleasures(dataP.pleasureByUser));
		console.log('dataPlaser',dataP.pleasureByUser);
	    }
	}
    };
}
export function loadSuccess(data){
    return{
	type: 'USER_SUCCESS',
	age: data.age,
	email: data.email,
	gender: data.gender,
	name: data.name,
	urlImage: data.picture
    };
}
export function loadPleasures(data){
    console.log('loadPleasures',data);
    return{
	type:'PLEASURES_SUCCESS',
	pleasures: data
    };
}
