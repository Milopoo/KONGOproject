import { getFirestore, collection, addDoc, setDoc, getDocs}  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL}  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-storage.js";

const db = getFirestore();

const querySnapshot = await getDocs(collection(db, 'productos', 'Mujer', 'Lujo'));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots

  doc.data().Name;
  doc.data().Code;
  doc.data().Promo;
  doc.data().Cantidad;
  doc.data().Color;
  doc.data().Size;
  doc.data().Precio;
  doc.data().Descripcion;
  doc.data().Gender;
  doc.data().Category;
  doc.data().TOTAL;
  doc.data().url;

  console.log(doc.id, " => ", doc.data());
});






/*const docRef = doc(db, "productos", "Mujer", "Lujo", "23");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}*/