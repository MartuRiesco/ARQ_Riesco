import React,  { useState, useEffect } from 'react';
import './style.css'


//------ IMPORT BASE DE DATOS

import { collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

async function getItemsFromDatabase() {
  const obrasColectionRef = collection(db, "obras_destacadas");
  console.log('db', db);
  let snapshotObras = await getDocs(obrasColectionRef);
  const documents = snapshotObras.docs;

  const dataObras = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataObras;
}



function Obras() {
  return (
    <div>Obras</div>
  )
}

export default Obras