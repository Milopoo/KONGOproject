//Carrusel del archivo JSON sliderRecomend.json
/*let cadena1 = '{"persona":[{"ustelefono":"3544432","usidrol":0,"userid":1,"usapellidos":"Perez","useremail":"andrea@gmail.com","usnombres":"Andrea"}]}';

let json1 = JSON.parse(cadena1);
console.log(json1.persona[0].ustelefono);*/
const gorras = [
  {
    id : "1",
    nombre: "Gorra 1",
    desc : "Gorra1",
    visitas : "2"
  },
  {
    id : "2",
    nombre: "Gorra 2",
    desc : "Gorra2",
    visitas : "5"
  },
  {
    id : "3",
    nombre: "Gorra 3",
    desc : "Gorra3",
    visitas : "10"
  }
];

//console.log(gorras[0].nombre);

//Carrusel recomendadas
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot2");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
//Boton editar admin
document.getElementById("myBtn").onclick = function() {myFunction()};
          
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("showEdit");
}

//Boton editar productos panelAdmin.html

function myFunction() {
  document.getElementById("myDropdownP").classList.toggle("showP");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {
    var dropdowns = document.getElementsByClassName("dropdown2-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showP')) {
        openDropdown.classList.remove('showP');
      }
    }
  }
}