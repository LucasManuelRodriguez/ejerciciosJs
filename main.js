// 6. Desarrollar una función que dibuje una 'Card' de una película en el documento usando un objeto javascript como datos.



// 1. Desarrollar una función que escriba en la consola del navegador cada item de una lista de la compra.

let ferreteria = ["tornillos","martillo","clavo","tarugo","oring","arandela"];


function printlist(){
    ferreteria.forEach(e=>{
        console.log(e)
    })
}
printlist()
//-----------------------------------------------------------------------------------------------------------

// 2. Desarrollar una función que escriba un Título h1 en el documento HTML.
let boxTitle = document.getElementById('Box-exercise');
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
let boxInput = document.getElementById('inputText');

function captureValue(){
    printTitle(boxInput.value)
}

//-----------------------------------------------------------------------------------------------------------

// 5. Desarrollar una función que escriba en la consola del navegador cada item de una lista de la compra.