import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, collection, doc, query, where } from 'firebase/firestore';


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

  /* export async function getSingleItemFromDatabase(idCategory) {
  

    const productsColectionRef = collection(db, "obras_destacadas");
    const docRef = doc(productsColectionRef, idCategory);

    
    const docSnapshot = await getDoc(docRef);
  
    if (docSnapshot.exists() === false) 
      throw new Error("No existe el documento") 
  
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } */

  export async function getServicios() {
    const coleccionProductos = collection(db,'servicios');
  let snapshotProducts= await getDocs(coleccionProductos)
  const documents= snapshotProducts.docs;
   const dataProducts= documents.map(doc=>doc.data())
  return dataProducts
  };
  export async function getSingleItemFromDatabase(categoriaURL) {
    const coleccionProductos = collection(db, 'obras');
    const q = query(coleccionProductos, where('category', '==', categoriaURL));
    let snapshotProductos = await getDocs(q);
    const documents = snapshotProductos.docs;
    const dataProductos = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return dataProductos;
  }
  export async function getObras (){
    const coleccionProductos = collection(db, "obras");
  let snapshotProductos= await getDocs(coleccionProductos);
  const documents= snapshotProductos.docs;
  const dataProductos= documents.map((doc)=> ({...doc.data(), id: doc.id}));
  return dataProductos
  }
  export async function getYear(yearURL){
    const coleccionProductos = collection(db, "obras");
    const q = query(coleccionProductos, where("year", "==", yearURL));
    let snapshotProductos= await getDocs(q);
  const documents= snapshotProductos.docs;
  const dataProductos= documents.map((doc)=> ({...doc.data(), id: doc.id}));
  return dataProductos
  }