import { request } from 'graphql-request';

export async function getData(query,variables){
    var x;
    const endpoint = 'http://35.203.64.114/graphql';
    await request(endpoint,query,variables).
	then(data =>{
	    x=data;
	});
    return x;
}


