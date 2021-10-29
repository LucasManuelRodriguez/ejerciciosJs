// 5. Desarrollar una función que escriba en el documento HTML cada item de una lista de la compra.
let listItems = document.getElementById('listItems');
export function printList(item){
    listItems.innerHTML += `<li>${item}</li>`
}