// 4. Teniendo un input de texto y un botón:
// Desarrollar una función que al hacer click en él, escriba el contenido (value) del input como un título en el documento.
import { printTitle } from "./ejercicio2.js";

let boxInput = document.getElementById('inputText');
let botonEnviar = document.getElementById('Box-contenido');


export function captureValue(){
    printTitle(boxContenido,boxInput.value)
}



