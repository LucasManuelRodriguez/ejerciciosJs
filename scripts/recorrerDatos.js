export function readList(lista,accion){
    lista.forEach(e=>{
        accion(e)
    })
}