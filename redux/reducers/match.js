const defaultState={
    isReady: 'false',
    cards: []
};

export default function reducer(state=defaultState,action){
    switch(action.type){
    case 'LOAD_MATCH_SUCCESS':
	return Object.assign({},state,{
	    isReady: 'true',
	    cards: action.cards
	});
    case 'NO_USERS_MATCH':
	return Object.assign({},state,{
	    isReady: 'none'
	});
    default:
	return state;
    }
}
