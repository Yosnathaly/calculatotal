let color = document.querySelector('#color')
let cantidad = document.querySelector('#cantidad')
function calcularTotal(){
    console.log("los datos son " + color.value + " y " + cantidad.value)
    let precio = document.querySelector('#pricetotal')
    let cant = document.querySelector('#canttotal')
    let circulocolor = document.querySelector('#circulocolor')
    precio.innerHTML = 2500000 * cantidad.value
    cant.innerHTML = cantidad.value
    circulocolor.style.backgroundColor = color.value
}