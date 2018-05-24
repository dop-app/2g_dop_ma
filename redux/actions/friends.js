import { USER_DATA } from '../graphql/Users';
import { FRIENDS } from '../graphql/Match';
import { getData } from '../graphql';

export function loadData(id, dispatch){
    return async function(dispatch){
	if(id!=null){
	    console.log('dispatch');
	    let variables={
		id: id
	    };
	    let data = await getData(FRIENDS,variables);
	    if(data != null){
		console.log('DATA',data);
		let friendsIds = data.matchByUser.map(
		    (obj)=>{
			if(id==obj.id_user_one){
			    return obj.id_user_two;
			}else{
			    return obj.id_user_one;
			}
		    }
		);
		if(friendsIds != null && friendsIds.length>0){		    
		    dispatch(makeFriends(friendsIds));   
		}else{
		    dispatch(noFriends());
		}
	    }
	}
    };
};

export function makeFriends(data,dispatch){
    return async function(dispatch){
	console.log(data);
	var dataUsers=[];
	for(var i=0;i<data.length;i++){
	    let vars = {
		id: data[i]
	    };
	    let dataTmp = await getData(USER_DATA,vars);
	    dataUsers.push(dataTmp.userById);
	}
	console.log('dataUsers',dataUsers);
	dispatch(success(dataUsers));
    };
}
export function success(dataUsers){
    return{
	type: 'LOAD_FRIENDS_SUCCESS',
	friends: dataUsers
    };
}
export function noFriends(){
    return {
	type: 'NO_FOUND_FRIENDS'
    };
}
