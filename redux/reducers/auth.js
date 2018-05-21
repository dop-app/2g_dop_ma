import { request } from 'graphql-request';
import { USER_TOKEN } from '../graphql/Users';

const endpoint = 'ip/graphql';

const defaultState={
    isLoggedIn: false,
    id:'',
    token:''
};

export default function reducer(state=defaultState, action){
    switch(action.type) {
    case 'LOGIN':
	if(action.username!='' && action.password!=''){
	    const variables = {
		email: action.username,
		password: action.password
	    };

	    request(endpoint,USER_TOKEN,variables).
		then(data => console.log(data));
	    return Object.assign({},state,{
		isLoggedIn: true,
		id: action.username,
		token: action.password
	    });
	};
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
