// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import ObrasList from '../ObrasList/ObrasList';
import './style.css';
import { getObras, getYear } from '../../services/firebase';

/* //----Import Firebase

import { collection, getDocs, query, where } from "firebase/firestore";
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
    const productsColectionRef = collection(db, "obras_destacadas");
    let snapshotProducts = await getDocs(productsColectionRef);
    const documents = snapshotProducts.docs;
    
    const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(dataProducts);
    return dataProducts;
  }
  
  async function getItemsByCategoryFromDatabase(categoryURL) {
    const productsColectionRef = collection(db, "obras_destacadas");
  
    const q = query(productsColectionRef, where("category", "==", categoryURL));
  
    let snapshotProducts = await getDocs(q);
    const documents = snapshotProducts.docs;
    const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return dataProducts;
  } */
  



  function Obras() {
    const [users, setUsers] = useState([]);
  
    const params = useParams();
    const idYear = params.idYear;
  
    async function leerDatos() {
      if (idYear === undefined){
        let respuesta = await getObras();
        setUsers(respuesta)
    }else{
        let respuesta =  await getYear(idYear);
        setUsers(respuesta)
    }
 }      
   useEffect(()=>{
    leerDatos();
   }, [idYear]);
   console.log(users);
  
    return (
      <div>
        <div>
            <ObrasList users={ users } />
        </div>
      </div>
    );
  }
  

export default Obras;