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
`
