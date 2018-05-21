import { request } from 'graphql-request';
import { USER_TOKEN } from '../graphql/Users';

const endpoint = 'http://35.229.114.220/graphql';

const defaultState={
    isLoggedIn: false,
    id:'',
    token:''
};
async function getData(endpoint,query,variables){
    var x;
    await request(endpoint,query,variables).
	then(data =>{
	    x=data;
	});
    return x;
}
export default async function reducer(state=defaultState, action){
    switch(action.type) {
    case 'LOGIN':
	if(action.username!='' && action.password!=''){
	    const variables = {
		email: action.username,
		password: action.password
	    };
	    var x= await getData(endpoint,USER_TOKEN,variables);
	    console.log(x.auth.token);
	    if(x.auth.token != ''){
		console.log('entro');
		return Object.assign({},state,{
		    isLoggedIn: true,
		    id: x.auth.id,
		    token: x.auth.token
		});
	    }else{
		return state;
	    } 
	}else{
	    return state;
	}
    case 'LOGOUT':
	return Object.assign({},state,{
	    isLoggedIn: false,
	    id: '',
	    token: ''
	});
    default:
	return state;
    }
    }
