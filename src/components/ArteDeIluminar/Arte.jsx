/* eslint-disable no-unused-vars */
import React from 'react'
import './style.css'
import Button from '../Button/Button'
import { useState } from 'react'

function Arte() {
    return (
    <div>
        <div className='arte-de-iluminar container'>
            <section className='lado-a'>
                <div className='titulo'>
                    <h2>El <span className='titulo-arte'>arte </span> de la iluminación</h2>
                </div>
                
                <div className='descrip-titulo-arte'>
                    <p>
                      La luz artificial ha dejado de verse como una simple herramienta utilizada exclusivamente para proveer la cantidad de luz indispensable que permite ejecutar una actividad funcional. 
                    </p>            
                   
                    <div className='boton-arte'>
                      <Button info={<p className='boton-arte-parrafo'>
                          La iluminación se ha convertido en un recurso de diseño y un medio multifacético que ha permitido a la arquitectura romper esquemas y trascender en el plano sensorial más allá del funcionamiento. Permite diferenciar o acentuar usos, recorridos, formas, colores y texturas de los edificios y su entorno, como también la creación de nuevos escenarios.
                        </p>}></Button>
                    </div>           
                </div>
                
            </section>
            <section className='lado-b'>
                {/* <div className='blur-arte'></div> */}
                <img className='imagen-arte' src='https://i.ibb.co/QHGhLvQ/arte-de-iluminar.png'></img>
            </section>
         </div>
    </div>
  )
}

export default Arte