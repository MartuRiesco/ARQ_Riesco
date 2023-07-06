/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Slider from 'react-animated-slider';
import './style.css'
import { Link } from 'react-router-dom';
import { getObrasDestacadas } from '../../services/firebase';
import { BsArrowRight } from "react-icons/bs";

function Carousell() {

          const [Datos, setDatos] = useState([]);
          async function leerDatos() {
            let respuesta = await getObrasDestacadas();
            setDatos(respuesta);
          }
          useEffect(() => {
            leerDatos();
          }, []);

  return (
          <Slider autoplay={3000}  /*  classNames={horizontalCss} */>
              {Datos.map((item, index) => (
                    <div className='foto-carousel'
                      key={index}
                      style={{ background: `url('${item.img}') no-repeat center center`,
                      backgroundSize:'cover'
                    }}
                    >
                          <div className="center">
                            <h1 className='titulo-carousel'>{item.title}</h1>
                            <p className='descripcion-carousel'>{item.description}</p>
                          <Link to={`/obra/${item.category}`}>  <button className='boton-carousel'>
                                {item.button} <span className='arrow'><BsArrowRight/></span>
                            </button></Link>
                          </div>

                      </div>
              ))}
          </Slider>
  )
}

export default Carousell;