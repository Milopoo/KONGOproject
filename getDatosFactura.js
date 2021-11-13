let params = new URLSearchParams(location.search); //Busca todos las variables existentes y las guarda en un arraylist
        var id = params.get('id'); //Busca la variable que tenga nombre id


        if (id == null) { //confirmador extra para redireccionar si no manda un id
            window.location.href = "LujoMujer.html";
        } else {
            if (id == 16) { //aqui deberia ser para confirmar si existe en la base de datos pero mi base de datos es de 1
                document.getElementById("nombreP").innerHTML = id; //se reemplaza el contenido de la pagina por los datos del codigo de producto en la base de datos
            } else { //Puede existir la posiblidad de redireccionar como en el primer caso (seria lo ideal)
                document.getElementById("variable").innerHTML = "error 404"; //caso en el que no se encuentre ese id (si quieren verlo deben modificar el url manualmente y cambiar el numero)
            }
        }