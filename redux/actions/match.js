import { USER_DATA } from '../graphql/Users';
import { FILTER_LIST } from '../graphql/Match';
import { USERS_LIST } from '../graphql/Pleasures';
import { getData } from '../graphql';

export function loadData(id,dispatch){
    return async function(dispatch){
	if(id!=null){
	    const variables={
		id: id
	    };
	    var data = await getData(USERS_LIST,variables);
	    if (data != null){
		console.log(data);
		var lista = data.usersByUser.map((obj)=>{
		    return obj.user_id;
		});
		console.log('lista',lista);
		dispatch(filterList(id,lista));
	    }
	}
    };
}
export function filterList(id,data,dispatch){
    return async function(dispatch){
	const variables = {
	    id: id,
	    listUsers: data
	};
	var usuariosFinales = await getData(FILTER_LIST,variables);
	var listFinal = usuariosFinales.filtrateListPossibles;
	if(listFinal != null && listFinal.listUsersFiltered.length>0){
	    var dataUsers = [];
	    for (var i=0; i<listFinal.listUsersFiltered.length;i++){
		let vars ={
		    id: listFinal.listUsersFiltered[i]
		};
		var dataTmp = await getData(USER_DATA,vars); 
		dataUsers.push(dataTmp.userById);
	    }
	    if(dataUsers!=null){
		dispatch(makeCards(dataUsers));
	    }
	    
	}
    };
}

export function makeCards(data,dispatch){
    return async function(dispatch){
	var cards = data.map((obj)=>{
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
