
const defaultState={
    isLoggedIn: false,
    id:'',
    token:''
};

export default function reducer(state=defaultState, action){
    switch(action.type) {
    case 'LOGIN':
	return Object.assign({},state,{
	    isLoggedIn: true,
	    id: action.id,
	    token: action.token
	});
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
