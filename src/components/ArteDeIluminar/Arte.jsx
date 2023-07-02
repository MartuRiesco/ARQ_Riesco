/* eslint-disable no-unused-vars */
import React from 'react'
import './style.css'
import Button from '../Button/Button'
import { useState } from 'react'

function Arte() {
  const [Text, setText] = useState(false);
  const handleBotonClick = () => {
    setText(!Text);
  };
  const buttonLabel = Text ? 'Leer menos' : 'Saber Más';
  return (
    <div className='container-arte-de-iluminar'>
        <div className='arte-de-iluminar'>
            <section className='lado-a'>
                <div className='titulo'>
                <h2>El <span className='titulo-arte'>arte </span> de la iluminación</h2>
                </div>
                
                <div className='descrip-titulo'>
                    <p>La iluminación se ha convertido en un recurso de diseño y un medio multifacético que ha permitido a la arquitectura romper esquemas y trascender en el plano sensorial más allá del funcionamiento. 
                    </p>
                    
                    {
                      Text && (
                      <p>
                      Permite diferenciar o acentuar usos, recorridos, formas, colores y texturas de los edificios y su entorno, como también la creación de nuevos escenarios.
                      </p>
                      )

                    }
                   
                   
                <div className='boton-arte'>
                   <Button props={buttonLabel} onClick={handleBotonClick}></Button>
                </div>
                    
                </div>
                
            </section>
            <section className='lado-b'>
                <div className='blur-arte'></div>
                <img className='imagen-arte' src='https://i.imgur.com/GkUV6J7.jpg'></img>
            </section>
         </div>
    </div>
  )
}

export default Arte