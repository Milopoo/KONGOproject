//Slider de imagenes principal
//console.log("Cargado");
$('.visitas').click(function(event) {
    event.preventDefault();
      var redirectUrl = $(this).attr('href');
      $.ajax({
          url: "click_visitas.php",
          success: function(response) {
              if (response = 'success') {
                  // The counter file has been updated in the background, but we should update the results on screen to tell the user
                  var count = $('#count').html();
                  $('#count').html(parseFloat(count) + 1);
                  
                  // Then redirect so that file can download
                  window.location.href = redirectUrl;
              }
          }
      });
      return true;
  });
  
  // jQuery to get the current count on page load
  $.ajax({
      url: "get_visitas.php",
      success: function(data) {
          var data = JSON.stringify(data, null, 4);
          var data = $.parseJSON(data);
  
          $('#count').html(data.count);
      }
  });
