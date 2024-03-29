
import { set, ref, getDatabase, update, get, child } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
var idF = " ";
function getValueCheckBox(name) {
  const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
  let valor = [];
  checkboxes.forEach((checkbox) => {
    valor.push(checkbox.value);
  });
  return valor
}
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString(length) {
  let result = ' ';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
function required() {
  var empN = document.getElementById('fname').value
  var empC = document.getElementById('email').value
  var empD = document.getElementById('adr').value
  var empCi = document.getElementById('ciudad').value
  var empB = document.getElementById('barrio').value
  var empT = document.getElementById('telefono').value
  var empP = document.getElementById('postal').value
  var empE = document.getElementById('tipoEnvio').value

  if (empN == "" || empC == "" || empD == "" || empCi == "" || empB == "" || empT == "" || empP == "" || empE == "") {
    alert("Por favor llene el formulario completo");
    return false
  } else {
    return true
  }
}
document.getElementById('subirDatos').onclick = async function ingresarDatos(idF, productos, total, nombreUsuario, correoUsuario, direccion, ciudad, barrio, telefono, codPostal, metodoPago, metodo, tipoEnvio, estado, fecha) {
  var today = new Date()
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  if (required()) {
    metodo = getValueCheckBox('fooby[1][]')
    idF = 0
    productos = localStorage.getItem('bolsa')
    total = localStorage.getItem('total')
    nombreUsuario = document.getElementById('fname').value
    correoUsuario = document.getElementById('email').value
    direccion = document.getElementById('adr').value
    ciudad = document.getElementById('ciudad').value
    barrio = document.getElementById('barrio').value
    telefono = document.getElementById('telefono').value
    codPostal = document.getElementById('postal').value
    metodoPago = metodo[0]
    tipoEnvio = document.getElementById('tipoEnvio').value
    estado = "Pendiente de pago"
    fecha = date

    const database = getDatabase();

    var id = '';

    const querySnapshot = await get(ref(database, 'Facturas'));
    

    const dbRef = ref(database);
    await get(child(dbRef, 'Facturas')).then((snapshot) => {
      if (snapshot.exists()) {
        querySnapshot.forEach(database => {
          //console.log(database.val());
          //console.log(database.val().IdFactura);
          id = database.val().IdFactura  
          //console.log(id)       
        });
      } else {
        console.log("No hay datos asi")
      }
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.code + error.message)
      })
        //console.log(id)
         id ++
         //console.log("nuevo id  " + id)
         idF = id


    //Insertar
    await set(ref(database, 'Facturas/' + idF), {
      IdFactura: idF,
      Productos: productos,
      Total: total,
      Nombre: nombreUsuario,
      Email: correoUsuario,
      Direccion: direccion,
      Ciudad: ciudad,
      Barrio: barrio,
      Tel: telefono,
      CodigoPostal: codPostal,
      Metodo: metodoPago,
      Envio: tipoEnvio,
      Estado: estado,
      FechaCompra: fecha
    })

    // Datos guardados con exito

    //Mostrar datos factura
    //Seleccionar data
    //const dbRef = ref(database);
    get(child(dbRef, 'Facturas/' + idF)).then((snapshot) => {
      if (snapshot.exists()) {
        //console.log(snapshot.val());
      } else {
        console.log("No hay datos asi")
      }
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.code + error.message)
      })

    console.log('Datos guardados con exito');
    window.location.href = "factura.html" + '?idF=' + idF
    return false;
  } else {

  }
  //Actualizar
  /*function actualizar() {
    update(ref(database, 'Facturas/' + idF), {
      IdFactura: idF
    })
      .then(() => {
        // Datos guardados con exito
        console.log('Datos guardados con exito');
        idF = idF + 1
      })
      .catch((error) => {
        // Error al guardar datos
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.code + error.message)
      });
  }*/
  //insertar()
  //seleccionar()
  //formulario.innerHTML = ' '
};