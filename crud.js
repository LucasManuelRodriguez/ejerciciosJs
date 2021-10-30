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
    listProducts.innerHTML += `<li id="${item}">${item} <img id="${item}" src="./assets/delete.png" alt="icon-delete"></li>`
    let botonDelete = document.getElementById(`${item}`)
    
    botonDelete.addEventListener('click',(event)=>{
        let productElegido = event.target
        let product = document.getElementById(`${item}`)
        list.forEach(e=>{e == product
        console.log(product)})
    });
}



botonCrud.addEventListener('click',getDataCrud);
