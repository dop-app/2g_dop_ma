import gql from "graphql-tag";
export const USER_DATA =`
query userData($id:Int!){
  userById(id: $id){
    id,
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

export const ALL_USERS_DATA  = `
query userData($id:Int!){
 allUsers{
    name,
    email,
    gender,
    picture,
    age
  }
}
`
