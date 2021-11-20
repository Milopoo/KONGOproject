
import { getFirestore, collection, getDocs, doc, getDoc, query, orderBy, limit }  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore(); 


var img = new Array ();

const q = query(collection(db, "productos"), orderBy("contVisitas", "desc"), limit(3));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {

    img.push(doc.data().url)  

})

console.log(img); 



//Slider principal
var imagenes = new Array("imgProductos/2.jpeg", "imgProductos/4.jpeg", "imgProductos/5.jpeg", "imgProductos/1.jpeg");
imagenes = img; 
var animacion = new Array("animaLateralDer", "animaLateralDer2", "animaLateralDer3", "animaLateralDer4" );
var slider = document.getElementById("slider2");
var sliderAnima = document.getElementById("slider-anima2");
var i = 0;
var tiempoAnimacion = " 1s";

slider.src = imagenes[i];
sliderAnima.src = imagenes[i+1];
sliderAnima.style.animationName = animacion[i];
sliderAnima.style.animationDuration = tiempoAnimacion;


window.setInterval(cambio,6000);

function cambio(){
    if(i > imagenes.length-2)
        i=0;
     else
        i++;

        slider.src = imagenes[i];

    if( i+1 > imagenes.length-1)
        sliderAnima.src = imagenes[0];

    else
        sliderAnima.src = imagenes[i+1];


        sliderAnima.style.animationName = animacion[i];
}
