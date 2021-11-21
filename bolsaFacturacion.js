var datos = localStorage.getItem('bolsa')
var datosBolsa = JSON.parse(datos)

//console.log(datosBolsa)

Object.values(datosBolsa).forEach(producto => {

    var productos = document.createElement("p")
    var precios = document.createElement("p")

    var nProductos = document.createTextNode(datosBolsa[producto.id].title)
    productos.appendChild(nProductos)
    document.getElementById("nombreP").appendChild(productos)

    var nPrecios = document.createTextNode("$" + datosBolsa[producto.id].precio * datosBolsa[producto.id].cantidad)
    precios.appendChild(nPrecios)
    document.getElementById("precio").appendChild(precios)

    //console.log(nProductos)
    //console.log(nPrecios)
})
//Envios rappi servien envia
document.getElementById("total").innerHTML = "$" + localStorage.getItem('total')
document.getElementById("cantidadProductos").innerHTML = localStorage.getItem('totalProducto')
