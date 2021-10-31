let listProducts = document.getElementById('listProducts');
let nameProduct = document.getElementById('nameProduct');
let botonCrud = document.getElementById('botonCrud');

let list = [];


function getDataCrud(){
        captureValue(nameProduct)
}


function captureValue(date){
    let nameProductList = date.value;
    list.push(nameProductList)
    readList(listProducts,list,printList)
}

function readList(boxContenido,lista,accion){
    boxContenido.innerHTML=""
    lista.forEach(e=>{
        accion(e)
    })
}
function printList(item){
    listProducts.innerHTML += `<li id="${item}">${item}</li>`
    let botonDelete = document.getElementById(`botonCrudReset`)
    botonDelete.addEventListener('click',()=>{
        listProducts.innerHTML = "";
        console.log(list);
        removeList(list)
    })
    
}

function removeList(array) {
    array.splice(0,array.length);
    console.log(list)
}



botonCrud.addEventListener('click',getDataCrud);
