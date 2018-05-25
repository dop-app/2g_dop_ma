const defaultState={
    isReady: false,
    age: '',
    email: '',
    gender: '',
    name: '',
    urlImage: '',
    pleasuresReady:false,
    pleasures:[]
};

export default function reducer(state=defaultState,action){
    switch(action.type){
    case 'USER_SUCCESS':
	return Object.assign({},state,{
	    isReady: true,
	    age: action.age,
	    email: action.email,
	    gender: action.gender,
	    name: action.name,
	    urlImage:action.urlImage
	});
    case 'PLEASURES_SUCCESS':
	return Object.assign({},state,{
	    pleasuresReady: true,
	    pleasures: action.pleasures
	});
    case 'RESET':
	return defaultState;
    default:
	return state;
    }
}
