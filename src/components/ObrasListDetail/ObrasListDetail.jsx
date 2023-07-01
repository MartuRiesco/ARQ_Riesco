import "./style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


// Config Firebase---------------------------------------------------------

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";


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

async function getSingleItemFromDatabase(idItem) {
  // referencia de la colección y del documento
  const productsColectionRef = collection(db, "obras_destacadas");
  const docRef = doc(productsColectionRef, idItem);

  // getDoc -> datos
  const docSnapshot = await getDoc(docRef);

  // extra
  if (docSnapshot.exists() === false) 
    throw new Error("No existe el documento") 

  return { ...docSnapshot.data(), id: docSnapshot.id };
}

// -------------------------------------------------------------------------------

function ItemDetailContainer() {
  const [user, setUser] = useState({});


  const params = useParams();
  const idUser = params.idUser;

  useEffect(() => {
    getSingleItemFromDatabase(idUser)
      .then((respuesta) => {
        setUser(respuesta);
      })
      .catch((error) => alert(error));
  }, [idUser]);


  return (
    <div className='detail container'>
        <div className='detail__content'>
                <div className='detail__content-img' key={user.id}>
                    
                    <div>
                        <img src={user.img} alt={user.title} />
                    </div>
                    
                    <div className='detail__content-title'>
                        <h1>{user.title}</h1>

                    </div>
                    
                        
                </div>

                
        </div>
    </div>
  );
}

export default ItemDetailContainer;