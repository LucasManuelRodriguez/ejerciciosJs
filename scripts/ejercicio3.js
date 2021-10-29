// 3. Teniendo un cuadrado de color rojo en el documento de HTML:
// Desarrollar una función que, al hacer click en el mismo, éste se transforme en una círculo de color verde

export let boxTitleTwo = document.getElementById('Box-exercise_two');


export function changeColor(color){
    boxTitleTwo.style.borderRadius=('100%');
    boxTitleTwo.style.backgroundColor=`green`
    console.log('funciono')
}



