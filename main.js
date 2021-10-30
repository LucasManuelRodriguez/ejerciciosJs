import { shoppingList, movie } from "./scripts/datos.js";
import { readList } from "./scripts/recorrerDatos.js";
import { printlistInConsole } from "./scripts/ejercicio1.js";
import { printTitle } from "./scripts/ejercicio2.js";
import { boxTitleTwo, changeColor} from "./scripts/ejercicio3.js";
import { captureValue } from "./scripts/ejercicio4.js";
import { printList } from "./scripts/ejercicio5.js";
import { printMovies } from "./scripts/ejercicio6.js";

// 1. Desarrollar una función que escriba en la consola del navegador cada item de una lista de la compra.
readList(shoppingList,printlistInConsole);


// 2. Desarrollar una función que escriba un Título h1 en el documento HTML.
let boxTitle = document.getElementById('Box-exercise');
printTitle(boxTitle,"Estoy imprimiendo desde otro archivo js");


// 3. Teniendo un cuadrado de color rojo en el documento de HTML:
// Desarrollar una función que, al hacer click en el mismo, éste se transforme en una círculo de color verde
boxTitleTwo.addEventListener('click', changeColor);


// 4. Teniendo un input de texto y un botón:
// Desarrollar una función que al hacer click en él, escriba el contenido (value) del input como un título en el documento.
let botonEnviar = document.getElementById('botonText');
botonEnviar.addEventListener('click', captureValue);


// 5. Desarrollar una función que escriba en el documento HTML cada item de una lista de la compra.
readList(shoppingList,printList)


// 6. Desarrollar una función que dibuje una 'Card' de una película en el documento usando un objeto javascript como datos.

let boxMovies = document.getElementById('box-movies');
printMovies(boxMovies,movie)



