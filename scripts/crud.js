let list = []

export function getDataCrud(){
        let nameProduct = document.getElementById('nameProduct');
        captureValue(nameProduct)
}

function captureValue(date){
    let nameProductList = date.value;
    console.log(nameProductList)
    printList(nameProductList)

}

function printList(item){
    let listProducts = document.getElementById('listProducts')
    listProducts.innerHTML += `<li>${item}</li>`
}
