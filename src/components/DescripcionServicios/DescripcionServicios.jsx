/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { isMobile } from 'react-device-detect';
import './style.css'
import Button from '../Button/Button'
import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
function DescripcionServicios({items}) {
  const [responsive, isResponsive] = useState(false)
  function esMobile(){
if(isMobile){
  isResponsive(true)
}else{
  isResponsive(false)
}

 }
 useEffect(()=>{
  esMobile();
},[false])
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className='item-servicio'>
        
        {items.map((item, index)=>(
            // eslint-disable-next-line react/jsx-key
            <section className='items'>
                {index % 2 === 0 || responsive ? (
                  <React.Fragment>
                    <div className='item-img' style={{
                    
                    }}>
                       <img className='imagen-servicio' src={item.img} alt={item.title} />
                    </div>
                    <div className='item-info' style={{
                    
                    }} >
                        <h2 className='titulo-servicio'>{item.title}</h2>
                        <p className='descripcion-servicio'>{item.description}</p>
                       <div className='boton-servicios'> <Button   info={<p className='moreinfo'>{item.moreinfo}</p>}/></div>
                    </div>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <div className='item-info'  style={{
                     
                    }}>
                        <h2 className='titulo-servicio'>{item.title}</h2>
                        <p className='descripcion-servicio'>{item.description}</p>
                        <div className='boton-servicios'> <Button   info={<p className='moreinfo'>{item.moreinfo}</p>}/></div>
                    </div>
                    <div className='item-img' style={{
                    
                    }}>
                       <img  className='imagen-servicio' src={item.img} alt={item.title} />
                    </div>
                  </React.Fragment>
                )}
            </section>
        ))}

    </div>
  )
}

export default DescripcionServicios