import { getFirestore, collection, addDoc, doc, setDoc, getDocs}  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL}  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-storage.js";

const db = getFirestore();

const querySnapshot = await getDocs(collection(db, "productos"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});