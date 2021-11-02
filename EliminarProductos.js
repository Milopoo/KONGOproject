import { getFirestore, doc, deleteDoc}  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore();

document.getElementById("DeleteBtn").addEventListener('click', async function(){
    
    await deleteDoc(doc(db, "productos", ));

      console.log("Producto eliminado correctamente");
      window.location = "EyEproductos.html";

})