import { USER_TOKEN } from '../graphql/Users';
import { getData } from '../graphql';
import { resetFriends } from './friends.js';
import { resetMatch } from './match.js';
import { resetUserInfo } from './userInfo.js';

export function login(username,password,dispatch){
    return async function(dispatch){
	if(username!='' && password!=''){
	    const variables = {
		email: username,
		password: password
	    };
	    //dispatch(loginSuccess(5,'asdasdjoajdsoiajdoiajsdioajd234asda'));
	    
	    var x= await getData(USER_TOKEN,variables);
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
export function logout(dispatch){
    /*   dispatch(resetUserInfo());
	 dispatch(resetMatch());
	 dispatch(resetFriends());*/
    return {
	type: 'LOGOUT'
    };
};
