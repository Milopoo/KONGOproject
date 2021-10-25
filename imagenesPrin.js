//Slider de imagenes principal
//console.log("Cargado");
/*$('#visitas').click(function(event) {
    event.preventDefault();
      var redirectUrl = $(this).attr('href');
      $.ajax({
          url: "click_visitas.php",
          success: function(response) {
              if (response = 'success') {
                  
                  var count = $('#count').html();
                  $('#count').html(parseFloat(count) + 1);
                  
                  
                  window.location.href = redirectUrl;
              }
          }
      });
      return true;
  });
  

  $.ajax({
      url: "get_visitas.php",
      success: function(data) {
          var data = JSON.stringify(data, null, 4);
          var data = $.parseJSON(data);
  
          $('#count').html(data.count);
      }
  });
*/
//Slider principal
var imagenes = new Array("imgProductos/2.jpeg", "imgProductos/4.jpeg", "imgProductos/5.jpeg", "imgProductos/1.jpeg");
var animacion = new Array("animaLateralDer", "animaLateralDer2", "animaLateralDer3", "animaLateralDer4" );
var slider = document.getElementById("slider");
var sliderAnima = document.getElementById("slider-anima");
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


