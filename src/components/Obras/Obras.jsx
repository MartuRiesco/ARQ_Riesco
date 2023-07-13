// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import ObrasList from '../ObrasList/ObrasList';
import './style.css';
import { getObras, getYear } from '../../services/firebase';

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