// 1. Desarrollar una función que escriba en la consola del navegador cada item de una lista de la compra.

let shoppingList = ["tornillos","martillo","clavo","tarugo","oring","arandela"];
let listItems = document.getElementById('listItems');
let boxTitle = document.getElementById('Box-exercise');
let boxInput = document.getElementById('inputText');


function readList(){
    shoppingList.forEach(e=>{
        printlistInConsole(e)
        printList(e)
    })
}
readList()

function printlistInConsole(items){
        console.log(items)
}
//-----------------------------------------------------------------------------------------------------------

// 2. Desarrollar una función que escriba un Título h1 en el documento HTML.

function printTitle(titulo){
    boxTitle.innerHTML = `<h1>${titulo}</h1>`
}

// printTitle("Ejercicios JavaScript");

//-----------------------------------------------------------------------------------------------------------

// 3. Teniendo un cuadrado de color rojo en el documento de HTML:
// Desarrollar una función que, al hacer click en el mismo, éste se transforme en una círculo de color verde

function changeColor(color){
    boxTitle.style.borderRadius=('100%');
    boxTitle.style.backgroundColor=`${color}`
}

//-----------------------------------------------------------------------------------------------------------

// 4. Teniendo un input de texto y un botón:
// Desarrollar una función que al hacer click en él, escriba el contenido (value) del input como un título en el documento.


function captureValue(){
    printTitle(boxInput.value)
}

//-----------------------------------------------------------------------------------------------------------

// 5. Desarrollar una función que escriba en el documento HTML cada item de una lista de la compra.



function printList(item){
    listItems.innerHTML += `<li>${item}</li>`
}

//-----------------------------------------------------------------------------------------------------------

// 6. Desarrollar una función que dibuje una 'Card' de una película en el documento usando un objeto javascript como datos.






