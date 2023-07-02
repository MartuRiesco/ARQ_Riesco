/* eslint-disable no-unused-vars */
import React from 'react'
import './style.css'
import Button from '../Button/Button'
function Arte() {
  return (
    <div>
        <div className='arte-de-iluminar'>
            <section className='lado-a'>
                <div className='titulo'>
                <h2>El <span className='titulo-arte'>arte </span> de la iluminación</h2>
                </div>
                <div className='descrip-titulo'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore accusantium blanditiis ducimus. Nemo, perspiciatis sapiente? Nihil cum, libero temporibus iste quisquam placeat minima! Reprehenderit quis, harum quibusdam corporis laboriosam assumenda
                    </p>
                </div>
                <div className='boton-arte'>
                   <Button props={'Saber Más'}></Button>
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