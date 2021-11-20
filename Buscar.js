
var index='';
index = document.querySelector('#Buscar'); 

document.querySelector('#Buscar').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
      index= Buscar.value;
      
      window.location.href = "PagBusqueda.html" + '?index=' + index;
      return false;

    }
});

