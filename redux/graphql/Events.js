export const CITAS_USER=`
query getCitas($id:Int) {
citaByPersonaId(id:$id){
  id,
  cita,  
  lugar,
  fecha,
  personas,
  estado,
  visibilidad
}
}`;
