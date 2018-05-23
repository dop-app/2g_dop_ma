import gql from "graphql-tag";

export const PLEASURE_QUERY = gql`
query pleasure{
  pleasureById(id:1){
    name,
    description   }
}
`;

export const PLEASURES_QUERY = `
query pleasuresData($id:Int!){
  pleasureByUser(user_id:$id){
    id,
    name,
    description,
    subcategory{
      name
    }
  }
}
`;
export const USERS_LIST =`
query usersId($id:Int!){
  usersByUser(user_id:$id){
    user_id
  }
}
`;
export const PLEASURE_MUTATION = gql`
mutation addPleasure(
$name:String!,
$description:String!,
$subcategory_id:Int!,
$user_id:Int
){
createPleasure(pleasure:{
name:$name,
description:$description,
subcategory_id:$subcategory_id,
user_id:$user_id
}){
  name,
  description
}
}
`;
export const SUBCATEGORY_QUERY = gql`
query listSubcategories{
  allSubcategories{
     id,
     name,
     description,
     category{
       name
     }
  }
}
`;
