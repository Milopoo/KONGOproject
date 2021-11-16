//Aprendiendo
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { set, ref, getDatabase, update, get, child } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDab6n-zj_opyKrNJcOE-T3n9DMCB9egA4",
  authDomain: "gorraskongo.firebaseapp.com",
  databaseURL: "https://gorraskongo-default-rtdb.firebaseio.com",
  projectId: "gorraskongo",
  storageBucket: "gorraskongo.appspot.com",
  messagingSenderId: "26040810819",
  appId: "1:26040810819:web:1d9338f05c9cbb68d183f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Variables lectura de de datos usuario
//var nombreUsuario, correoUsuario, direccion, ciudad, barrio, telefono, codPostal, metodoDavi, metodoNequi;

function getValueCheckBox(name) {
  const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
  let valor = [];
  checkboxes.forEach((checkbox) => {
    valor.push(checkbox.value);
  });
  return valor
}
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

document.getElementById('subirDatos').onclick = function ingresarDatos(idF, productos, nombreUsuario, correoUsuario, direccion, ciudad, barrio, telefono, codPostal, metodoPago, metodo, tipoEnvio, estado) {

  metodo = getValueCheckBox('fooby[1][]')
  //idF = Math.floor(Math.random()*100);
  idF = generateString(5)
  productos = localStorage.getItem('bolsa')
  nombreUsuario = document.getElementById('fname').value
  correoUsuario = document.getElementById('email').value
  direccion = document.getElementById('adr').value
  ciudad = document.getElementById('ciudad').value
  barrio = document.getElementById('barrio').value
  telefono = document.getElementById('telefono').value
  codPostal = document.getElementById('postal').value
  metodoPago = metodo[0]
  tipoEnvio = document.getElementById('tipoEnvio').value
  estado = "Pendiente"

  const database = getDatabase(app);
  
  //Insertar
    await set(ref(database, 'Facturas/' + idF), {
      IdFactura: idF,
      Productos: productos,
      Nombre: nombreUsuario,
      Email: correoUsuario,
      Direccion: direccion,
      Ciudad: ciudad,
      Barrio: barrio,
      Tel: telefono,
      CodigoPostal: codPostal,
      Metodo: metodoPago,
      Envio: tipoEnvio,
      Estado: estado
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

  //Seleccionar data
    const dbRef = ref(database);
    get(child(dbRef, 'Facturas/' + idF)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No hay datos asi ")
      }
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.code + error.message)
      }) 
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
  //window.location = "factura.html"
};


