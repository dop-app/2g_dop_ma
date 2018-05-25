import { USER_DATA } from '../graphql/Users';
import { PLEASURES_QUERY, CATEGORY_QUERY, SUBCATEGORY_QUERY } from '../graphql/Pleasures';
import { getData } from '../graphql';

export function loadData(id,dispatch){
    return async function(dispatch){
	if(id != null){
	    const variables ={
		id: id
	    };
	    var data = await getData(USER_DATA,variables);
	    if(data != null){
		dispatch(loadSuccess(data.userById));
	    }
	    var dataP = await getData(PLEASURES_QUERY,variables);
	    if(dataP != null){
		var dataC = await getData(CATEGORY_QUERY,{});
		var dictC = dataC.allCategories.map((obj)=>{
		    var rObj = {};
		    rObj[obj.id] = obj;
		    return rObj;
		});
		var dataS = await getData(SUBCATEGORY_QUERY,{});
		var dictS = dataS.allSubcategories.map((obj)=>{
		    var rObj = {};
		    rObj[obj.id] = obj;
		    return rObj;
		});
		console.log('CATEGORIAS',dictC,dictS);
		
		dispatch(loadPleasures(dataP.pleasureByUser,dictC,dictS));

		console.log('dataPlaser',dataP.pleasureByUser);
	    }
	}
    };
}
export function loadSuccess(data){
    return{
	type: 'USER_SUCCESS',
	age: data.age,
	email: data.email,
	gender: data.gender,
	name: data.name,
	urlImage: data.picture
    };
}
export function loadPleasures(dataP,dataC,dataS){
    return{
	type:'PLEASURES_SUCCESS',
	pleasures: dataP,
	categories: dataC,
	subcategories: dataS
    };
}
export function resetUserInfo(){
    return{
	type: 'RESET'
    };
}
