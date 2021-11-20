//Barra de busqueda
let buscar=document.querySelector(".icon-search");
let buscarBox=document.querySelector(".search-box .bx-search");
//<i class='bx bx-x'></i>
buscarBox.addEventListener("click",()=>{
buscar.classList.toggle("showInput");
if(buscar.classList.contains("showInput")){
    buscarBox.classList.replace("bx-search" , "bx-x" );
}else{
    buscarBox.classList.replace("bx-x" , "bx-search" );
}
})

//Menu responsive
let navbar=document.querySelector(".navbar");
//Slide bar cierra y abre
let menuOpenBtn=document.querySelector(".navbar .bx-menu");
let menuCloseBtn=document.querySelector(".nav-links .bx-x");
let navLinks=document.querySelector(".nav-links");

menuOpenBtn.addEventListener("click" , ()=>{
    navLinks.style.left="0";
});
menuCloseBtn.addEventListener("click" , ()=>{
    navLinks.style.left="-100%";
});
//
let qC=document.querySelector(".qc");
qC.addEventListener("click", ()=>{
navLinks.classList.toggle("show1");  
});

let masLujo=document.querySelector(".lujo");
masLujo.addEventListener("click", ()=>{
navLinks.classList.toggle("show2");
});

let jS=document.querySelector(".c");
jS.addEventListener("click", ()=>{
navLinks.classList.toggle("show3");
});
let sopor=document.querySelector(".s");
sopor.addEventListener("click", ()=>{
navLinks.classList.toggle("show4");
});
