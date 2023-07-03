import React, { useState, useEffect } from 'react'
import DescripcionServicios from '../DescripcionServicios/DescripcionServicios'
import { getServicios } from '../../services/firebase';
import './style.css'

function Servicios() {
  const [Datos, setDatos] = useState([]);
  async function leerDatos() {
    let respuesta = await getServicios();
    setDatos(respuesta);
  }
  useEffect(() => {
    leerDatos();
  }, []);
  return (
    <div className='servicios'>
      <h1 className='servicio-titulo'>SERVICIOS</h1>
      <div className='servicios-cont'>
        <h2 className='titulo-servicios-cont'>Con la luz tambien se diseña</h2>
        <p>
        La luz artificial ha dejado de verse como una simple herramienta utilizada exclusivamente para proveer la cantidad de luz indispensable que permite ejecutar una actividad funcional. La iluminación se ha convertido en un recurso de diseño y un medio multifacético que ha permitido a la arquitectura romper esquemas y trascender en el plano sensorial más allá del funcionamiento. Permite matizar o acentuar usos, recorridos, formas, colores y texturas de los espacios y su entorno, como también la creación de nuevos escenarios. 

        </p>

      </div>
      <DescripcionServicios items={Datos}/>
    </div>
  )
}

export default Servicios