import React from 'react'
import './style.css'
import Forms from '../Forms/Forms'
import {FiMapPin} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'

function Contacto() {
  return (
    <div>
      <div className='mapa'>
        <img className='imagen-mapa'src="https://i.imgur.com/uvSPtzJ.png" alt="ubicacion_estudio" />
      </div>
      <section className='informacion'>
        <div className='informacion-contacto'>
          <h2 className='titulo-contacto'>
            Contáctenos <br /> para más <br /> info.
          </h2>
          <hr />
          <p className='descripcion-contacto'>
          Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,
          sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua.
          </p>
          <h3 className='ubicacion-contacto'>
            Buenos Aires, Argentina
          </h3>
          <div className='iconos-contacto'>
            <div className='iconos-informacion'>
            <FiMapPin className='icon'/>
            <h4 className='direccion-contacto'>
            Ibera 2599 <br /> Piso 8
            </h4>
            </div>
            <div className='iconos-informacion'>
            <BsWhatsapp className='icon'/>
            <h4 className='direccion-contacto'>
            +54911 4034-7047
            </h4>

            </div>
            <div className='iconos-informacion'>
            <BsWhatsapp className='icon'/>
            <h4 className='direccion-contacto'>
            +54911 4542-2848
            </h4>

            </div>
          </div>



        </div>
        <div className='forms'>
          <Forms/>
        </div>
      </section>

    </div>
  )
}

export default Contacto