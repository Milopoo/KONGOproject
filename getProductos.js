import { getFirestore, collection, getDocs, getDoc, doc, deleteDoc, updateDoc }
    from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore();
var id = '';
var datos = {};
var datAux = '';
var produc = {};
var dAux = [];



const querySnapshot = await getDocs(collection(db, 'productos'));
querySnapshot.forEach((doc) => {
    datos = doc.data();
    produc = JSON.stringify(datos)
    datAux = JSON.parse(produc)
    //console.log(datAux)
    dAux.push(datAux)
    console.log(dAux)
    //localStorage.setItem('productos', dAux)
    //datAux = JSON.parse(produc)
    //console.log(datos)
   // console.log(produc)
    //localStorage.setItem('productos', produc)
    //console.log(datAux)
    //dAux = datAux
    //console.log(dAux)
    //localStorage.setItem('productos', produc)
    //console.log(localStorage.getItem('productos'))


    //id = doc.id; 

    //------- ir a detalle 

    /*const AbrirDetalle = document.querySelectorAll('.product-img')
    AbrirDetalle.forEach( btn =>{
    btn.addEventListener( 'click', (e)=>{
    console.log("id", e.target.dataset.id)
    id = e.target.dataset.id;
    DetalleProducto(e.target.dataset.id);
    
    })
    })*/
});


