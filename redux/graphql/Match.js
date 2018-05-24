export const FILTER_LIST=`
mutation filtrateListPossibles($id:Int!, $listUsers:[Int]!){
  filtrateListPossibles(id:$id,listUsers:{listUsers:$listUsers}){
    listUsersFiltered
  }
}
`;
export const MATCH_USER=`
mutation createMatch($id_user_one:Int!, $id_user_two:Int!,$state_user_one:Int!){
  createMatch(match:{
    id_user_one:$id_user_one,
    id_user_two:$id_user_two,
    state_user_one:$state_user_one
  }) {
    id_user_one
    id_user_two
    state_user_one
  }
}
`;
export const FRIENDS=`
query getFriends($id:Int!){
matchByUser(id:$id){
  id_user_one,
  id_user_two
}
}
`;
