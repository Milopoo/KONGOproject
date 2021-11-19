//Mostrar datos factura
import { set, ref, getDatabase, update, get, child } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

let params = new URLSearchParams(location.search); //Busca todos las variables existentes y las guarda en un arraylist
var idF = params.get('idF'); //Busca la variable que tenga nombre id
var prod = ''
var comprados = ''
console.log(idF);

const dbRef = ref(getDatabase());


//console.log(idF)

get(child(dbRef, `Facturas/${idF}`)).then((snapshot) => {
  if (snapshot.exists()) {
    //console.log(snapshot.val());
    document.getElementById("numeroFactura").innerHTML = snapshot.val().IdFactura
    document.getElementById("fname").innerHTML = "CLIENTE: " + " " + snapshot.val().Nombre
    document.getElementById("adr").innerHTML = "DIRECCION: " + " " + snapshot.val().Direccion
    document.getElementById("email").innerHTML = "EMAIL: " + " " + snapshot.val().Email
    document.getElementById("fechaCompra").innerHTML = "FECHA DE COMPRA (AAAA/MM/DD):  " + " " + snapshot.val().FechaCompra
    //document.getElementById("estado").innerHTML = snapshot.val().Estado
    document.getElementById("medEnvio").innerHTML = "METODO DE ENVIO: " + " " + snapshot.val().Envio
    document.getElementById("total").innerHTML = "$" + snapshot.val().Total
    prod = snapshot.val().Productos
    comprados = JSON.parse(prod)

    Object.values(comprados).forEach(producto => {
      var idS = document.createElement("p")
      var productos = document.createElement("p")
      var precios = document.createElement("p")
      var cantidad = document.createElement("p")
      var precioUnid = document.createElement("p")

      var Ids = document.createTextNode(comprados[producto.id].id)
      idS.appendChild(Ids)
      document.getElementById("idP").appendChild(idS)

      var nProductos = document.createTextNode(comprados[producto.id].title)
      productos.appendChild(nProductos)
      document.getElementById("nombreP").appendChild(productos)

      var nPrecios = document.createTextNode("$" + comprados[producto.id].precio * comprados[producto.id].cantidad)
      precios.appendChild(nPrecios)
      document.getElementById("totalP").appendChild(precios)


      var cantidadU = document.createTextNode(comprados[producto.id].cantidad)
      cantidad.appendChild(cantidadU)
      document.getElementById("cantidad").appendChild(cantidad)

      var precioU = document.createTextNode("$" + comprados[producto.id].precio)
      precioUnid.appendChild(precioU)
      document.getElementById("precioUnid").appendChild(precioUnid)
    })
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});


//Actuializando estado

const database = getDatabase();

let estados = document.getElementById('estados');
const btnG = document.getElementById('guardar');
btnG.addEventListener('click',  function () {
   update(ref(database, 'Facturas/' + idF), {
    Estado: estados.value
  })
    .then(() => {
      // Datos guardados con exito
      console.log('Datos guardados con exito');
    })
    .catch((error) => {
      // Error al guardar datos
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error.code + error.message)
    });
  window.location.href = "facturasAdim.hmtl";
  return false;
})
