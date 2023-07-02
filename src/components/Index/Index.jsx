import React from 'react'
import Carousell from '../Carousel/Carousel'
import './style.css'
import Arte from '../ArteDeIluminar/Arte'
import Obras from '../Obras/Obras'
function Index() {
  return (
    <div>
        <section className='carousel'>
        <Carousell/>
        </section>
        <div className='arte-ilum'>
        <Arte></Arte>
        </div>
        <div className='obras-destac'>
            <Obras />
        </div>
        </div>
  )
}

export default Index