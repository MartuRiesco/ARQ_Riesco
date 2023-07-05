import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, collection, doc } from 'firebase/firestore';


  const firebaseConfig = {
    apiKey: "AIzaSyA4PjlsnnSjT0XysPvy-JZmvO49nRIXYN8",
    authDomain: "iluminacionrie.firebaseapp.com",
    projectId: "iluminacionrie",
    storageBucket: "iluminacionrie.appspot.com",
    messagingSenderId: "854672234068",
    appId: "1:854672234068:web:bc3666a1d8f5c6d1e23fc1"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export async function getObrasDestacadas() {
      const coleccionProductos = collection(db,'obras_destacadas');
      let snapshotProducts= await getDocs(coleccionProductos)
      const documents= snapshotProducts.docs;
      const dataProducts= documents.map(doc=>doc.data())
      return dataProducts

      
  }

  export async function getSingleItemFromDatabase(idItem) {
  
    const productsColectionRef = collection(db, "obras_destacadas");
    const docRef = doc(productsColectionRef, idItem);
  
    
    const docSnapshot = await getDoc(docRef);
  
    if (docSnapshot.exists() === false) 
      throw new Error("No existe el documento") 
  
    return { ...docSnapshot.data(), id: docSnapshot.id };
  }



  