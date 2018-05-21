import gql from "graphql-tag";
export const USER_DATA = gql`
query userData($id:Int!){
  userById(id: $id){
    name,
    email,
    gender,
    picture,
    age
  }
}
`;
export const USER_TOKEN = `
mutation authToken($email: String!,$password: String!){
	auth(auth:{
    email:$email,
    password:$password
  }){
    token,
    id
  }  
}
`;
export const getCurrentUser = gql`
  query getCurrentUser {
    currentUser @client {
      id,
      token,
      isLoggedIn
    }
  }
`;

export const resetCurrentUser = gql`
  mutation {
    resetCurrentUser @client {
      id,
      token,
      isLoggedIn
    }
  }
`;
