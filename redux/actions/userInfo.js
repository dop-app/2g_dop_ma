import { USER_TOKEN } from '../graphql/Users';
import { getData } from '../graphql';

export function loadData(id,dispatch){
    return {
	type: 'LOAD_USER' 
    };
}
