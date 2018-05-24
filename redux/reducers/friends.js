const defaultState={
    isReady: false,
    data: []
};

export default function reducer(state=defaultState,action){
    switch(action.type){
    case 'LOAD_FRIENDS_SUCCESS':
	return Object.assign({},state,{
	    isReady: true,
	    data: action.friends
	});
    default:
	return state;
    }
}
