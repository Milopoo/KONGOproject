//Aprendiendo
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { set, ref, getDatabase } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
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

/*function asignarId() {
  nombreUsuario = document.getElementById('fname').value;
  correoUsuario = document.getElementById('email').value;
  direccion = document.getElementById('adr').value;
  ciudad = document.getElementById('ciudad').value;
  barrio = document.getElementById('barrio').value;
  telefono = document.getElementById('telefono').value;
  codPostal = document.getElementById('postal').value;
  metodoDavi = document.getElementById('myCheckboxDavi').value;
  metodoNequi = document.getElementById('myCheckboxNequi').value;
}*/
document.getElementById('subirDatos').onclick = function ingresarDatos(nombreUsuario, correoUsuario, direccion, ciudad, barrio, telefono, codPostal, metodoDavi, metodoNequi,IdFactura) {
  //asignarId();
  nombreUsuario = document.getElementById('fname').value
  correoUsuario = document.getElementById('email').value
  direccion = document.getElementById('adr').value
  ciudad = document.getElementById('ciudad').value
  barrio = document.getElementById('barrio').value
  telefono = document.getElementById('telefono').value
  codPostal = document.getElementById('postal').value
  metodoDavi = document.getElementById('myCheckboxDavi').value
  metodoNequi = document.getElementById('myCheckboxNequi').value
  
 

  const database = getDatabase(app);
  set(ref(database, 'facturas/' + IdFactura), {
    nombre: nombreUsuario,
    email: correoUsuario,
    Direccion: direccion,
    Ciudad: ciudad,
    Barrio: barrio,
    Tel: telefono,
    CodigoPostal: codPostal,
    Davi: metodoDavi,
    Nequi: metodoNequi
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
};

