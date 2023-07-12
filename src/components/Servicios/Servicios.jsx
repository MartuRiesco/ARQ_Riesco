// eslint-disable-next-line no-unused-vars
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
    <div className='container servicios'>
      <div className='servicios_content'>
        <h1 className='servicio-titulo'>Servicios</h1>
          <div className='servicios-cont'>
                  <p>
                      La luz artificial ha dejado de verse como una simple herramienta utilizada exclusivamente para proveer la cantidad de luz indispensable que permite ejecutar una actividad funcional. La iluminación se ha convertido en un recurso de diseño y un medio multifacético que ha permitido a la arquitectura romper esquemas y trascender en el plano sensorial más allá del funcionamiento. Permite matizar o acentuar usos, recorridos, formas, colores y texturas de los espacios y su entorno, como también la creación de nuevos escenarios. 
                  </p>
                  <hr  className='hr3'/>
          </div>
          
          </div>
        <DescripcionServicios items={Datos}/>
    </div>
  )
}

export default Servicios