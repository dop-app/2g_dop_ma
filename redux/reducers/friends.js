const defaultState={
    isReady: 'false',
    data: []
};

export default function reducer(state=defaultState,action){
    switch(action.type){
    case 'LOAD_FRIENDS_SUCCESS':
	return Object.assign({},state,{
	    isReady: 'true',
	    data: action.friends
	});
    case 'NO_FRIENDS_FOUND':
	return Object.assign({},state,{
	    isReady: 'none'
	});
    case 'RESET':
	return defaultState;
    default:
	return state;
    }
}
