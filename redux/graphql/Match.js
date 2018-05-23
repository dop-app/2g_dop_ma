export const FILTER_LIST=`
mutation filtrateListPossibles($id:Int!, $listUsers:[Int]!){
  filtrateListPossibles(id:$id,listUsers:{listUsers:$listUsers}){
    listUsersFiltered
  }
}
`
