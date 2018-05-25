import { USER_DATA } from '../graphql/Users';
import { FILTER_LIST, MATCH_USER } from '../graphql/Match';
import { USERS_LIST } from '../graphql/Pleasures';
import { getData } from '../graphql';

export function loadDataMatch(id,dispatch){
    return async function(dispatch){
	if(id!=null){
	    let variables={
		id: id
	    };
	    var data = await getData(USERS_LIST,variables);
	    if (data != null ){
		console.log(data);
		let lista = data.usersByUser.map((obj)=>{
		    return obj.user_id;
		});
		if(lista.lenght>0)
		    dispatch(filterList(id,lista));
		else
		    dispatch(noMatchFriends());
	    }
	}
    };
}
export function filterList(id,data,dispatch){
    return async function(dispatch){
	let variables = {
	    id: id,
	    listUsers: data
	};
	let usuariosFinales = await getData(FILTER_LIST,variables);
	let listFinal = usuariosFinales.filtrateListPossibles;
	if(listFinal != null && listFinal.listUsersFiltered.length>0){
	    let dataUsers = [];
	    for (var i=0; i<listFinal.listUsersFiltered.length;i++){
		let vars ={
		    id: listFinal.listUsersFiltered[i]
		};
		var dataTmp = await getData(USER_DATA,vars); 
		dataUsers.push(dataTmp.userById);
	    }
	    if(dataUsers!=null){
		console.log("dataUsersFinal",dataUsers);
		dispatch(makeCards(dataUsers));
	    }
	    
	}
    };
}

export function makeCards(data,dispatch){
    return async function(dispatch){
	let cards = data.map((obj)=>{
	    return{
		id: obj.id,
		name: obj.name,
		age: obj.age,
		gender: obj.gender,
		image: obj.picture
	    };
	});
	dispatch(success(cards));
    };
}
export function success(cards){
    return{
	type: 'LOAD_MATCH_SUCCESS',
	cards: cards
    };   
}
export function matchUser(id,user,state,cards,dispatch){
    return async function(dispatch){
	if(id!=null && user != null){
	    var variables={
		id_user_one: id,
		id_user_two: user,
		state_user_one: state
	    };
	    var data = await getData(MATCH_USER,variables);
	    if(data != null)
		dispatch(success(cards));
	}
    };
}
export function noMatchFriends(){
    return {
	type: 'NO_USERS_MATCH'
    };

}
export function resetMatch(){
    return{
	type: 'RESET'
    };
}
