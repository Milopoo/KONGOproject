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

//Boton aumentar cantidad
function wcqib_refresh_quantity_increments() {
    jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
        var c = jQuery(b);
        c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
    })
}
/*String.prototype.getDecimals || (String.prototype.getDecimals = function() {
    var a = this,
        b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function() {
    var a = jQuery(this).closest(".quantity").find(".qty"),
        b = parseFloat(a.val()),
        c = parseFloat(a.attr("max")),
        d = parseFloat(a.attr("min")),
        e = a.attr("step");
    b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});*/