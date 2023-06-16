import { initializeApp } from "firebase/app";
import {
    getFirestore,
    addDoc,
    collection,
    getDocs,
    query,
    where,
    doc,
    getDoc,
  } from 'firebase/firestore';
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
    const coleccionProductos = collection(db, 'obras_destacadas');
    
    let snapshotProductos = await getDocs(coleccionProductos);
    const documents = snapshotProductos.docs;
    const dataProductos = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return dataProductos; 
  }
  console.log(coleccionProductos);