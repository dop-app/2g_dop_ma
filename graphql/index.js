import gql from 'graphql-tag';

let resolversApp = {
    Mutation: {
	updateUser: (_,{index,value},{cache}) =>{
	    const query = gql`
            query GetCurrentUser {
		currentUser @client {
		    id,
		    token,
		    isLoggedIn
		}
	    }
	    `;
	    const previous =cache.readQuery({ query });
	    const data = {
		currentUser: {
		    ...previous.currentUser,
		    [index]: value
		}
	    };
	    cache.writeQuery({query,data});
	},
	resetCurrentUser:(_,d,{ cache })=>{
	    cache.writeQuery({data: defaultState});
	}

    }
};

export default resolversApp;
