import { request } from 'graphql-request';
import { USER_TOKEN } from '../graphql/Users';

const endpoint = 'http://35.203.64.114/graphql';


export function login(username,password,dispatch){
    return async function(dispatch){
	if(username!='' && password!=''){
	    const variables = {
		email: username,
		password: password
	    };
	    var x= await getData(endpoint,USER_TOKEN,variables);
	    console.log(x.auth.token);
	    if(x.auth.token != null){
		console.log('entro');
		dispatch(loginSuccess(x.auth.id,x.auth.token));
	    } ;
	} else {
	    dispatch(this.logout);
	}
    };
}
export function loginSuccess(id,token){
    console.log("success");
    return {
	type: 'LOGIN',
	id: id,
	token: token
    };
    }
    export const logout =() => {
	return {
	    type: 'LOGOUT'
	};
    };
async function getData(endpoint,query,variables){
    var x;
    await request(endpoint,query,variables).
	then(data =>{
	    x=data;
	});
    return x;
}
/*
  if(action.username!='' && action.password!=''){
    const variables = {
	email: action.username,
	password: action.password
    };
    var x= await getData(endpoint,USER_TOKEN,variables);
    console.log(x.auth.token);
    if(x.auth.token != ''){
	console.log('entro');
	Object.assign(state,{
	    isLoggedIn: true,
	    id: x.auth.id,
	    token: x.auth.token
	});
	return state;
    }else{
	return state;
    } 
}else{
    return state;
}
*/
