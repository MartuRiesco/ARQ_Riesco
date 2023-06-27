import React from 'react'
import './style.css'
import Carousell from '../Carousel/Carousel'
import Arte from '../ArteDeIluminar/Arte'

function Index() {
  return (
    <div>
        <section className='carousel'>
        <Carousell/>
        </section>
        <div className='arte-ilum'>
        <Arte></Arte>
        </div>
      
        </div>
  )
}

export default Index