import React from 'react'
import './style.css'
import Button from '../Button/Button'

function DescripcionServicios({items}) {
  return (
    <div className='item-servicio'>
        {items.map((item, index)=>(
            <section className='items'>
                {index % 2 === 0 ? (
                  <React.Fragment>
                    <div className='item-img' style={{
                      width:'50%'
                    }}>
                       <img className='imagen-servicio' src={item.img} alt={item.title} />
                    </div>
                    <div className='item-info' style={{
                      width:'50%'
                    }} >
                        <h2 className='titulo-servicio'>{item.title}</h2>
                        <p className='descripcion-servicio'>{item.description}</p>
                       <div className='boton-servicios'> <Button   info={<p className='moreinfo'>{item.moreinfo}</p>}/></div>
                    </div>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <div className='item-info'  style={{
                      width:'50%'
                    }}>
                        <h2 className='titulo-servicio'>{item.title}</h2>
                        <p className='descripcion-servicio'>{item.description}</p>
                        <div className='boton-servicios'> <Button   info={<p className='moreinfo'>{item.moreinfo}</p>}/></div>
                    </div>
                    <div className='item-img' style={{
                      width:'50%'
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