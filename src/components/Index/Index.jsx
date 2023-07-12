/* eslint-disable no-unused-vars */
import React from 'react'
import Carousell from '../Carousel/Carousel'
import './style.css'
import Arte from '../ArteDeIluminar/Arte'
import ObrasDestacadas from '../ObrasDestacadas/ObrasDestacadas'
import WhatsApp from '../WhatsApp/WhatsApp'
function Index() {
  return (
    <div>
        <section className='carousel'>
            <Carousell/>
        </section>

        <div className='arte-ilum container'>
            <Arte></Arte>
        </div>

        <div className='obras-destacadas'>
          <ObrasDestacadas />
        </div>
        <div>
          <WhatsApp />
        </div>

    </div>
  )
}

export default Index