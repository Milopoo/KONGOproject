import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

        const database = getDatabase();
        const fact = document.getElementById('fact');

        var idF = '';

        const querySnapshot = await get(ref(database, 'Facturas'));
        fact.innerHTML = '';

        const dbRef = ref(database);
        get(child(dbRef, 'Facturas')).then((snapshot) => {
            if (snapshot.exists()) {
                querySnapshot.forEach(database => {
                    //console.log(database.val());
                    fact.innerHTML += ` 
                    <table id="producttable">
        <thead>
            <tr>
                <td>FACTURAS GENERADAS</td>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>

    <table id="producttable"56>
        <tr>
          <th>#FACTURA</th>
          <th>CLIENTE</th>
          <th>TELÉFONO</th>
          <th>MÉTODO DE ENVIO</th>
          <th>FECHA DE COMPRA</th>
          <th>MÉTODO DE PAGO</th>
          <th>ESTADO PEDIDO</th>
          <th>TOTAL DE COMPRA</th>
        </tr>
        <tr>
          <td>${database.val().IdFactura}</td>
          <td>${database.val().Nombre}</td>
          <td>${database.val().Tel}</td>
          <td>${database.val().Envio}</td>
          <td>${database.val().FechaCompra}</td>
          <td>${database.val().Metodo}</td>
          <td>${database.val().Estado}</td>
          <td>${"$ " + database.val().Total}</td>
        </tr>
        <table id="producttable">
            <thead>
                <tr>
                    <td>
                        <button class="verFact" data-id="${database.val().IdFactura}">
                            ver factura
                        </button>
                    </td>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
      </table>`
                    //console.log(database.val().IdFactura);
                });
            } else {
                console.log("No hay datos asi")
            }
            const verFact = document.querySelectorAll('.verFact')
            verFact.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    //console.log("id", e.target.dataset.id)
                    idF = e.target.dataset.id;
                    actualizarEsta(e.target.dataset.id);
                })
            })
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.code + error.message)
        })
        //Mostrar factura

        async function actualizarEsta(idF) {

            const docRef = ref(database, "Facturas");
            const docSnap = await get(child(docRef, idF));
            console.log("id", idF);

            if (docSnap.exists()) {
                console.log(idF);

                window.location.href = "actuaFact.html" + '?idF=' + idF;
                return false;

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }