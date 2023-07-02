/* eslint-disable no-unused-vars */
import Carousell from '../Carousel/Carousel'
import React from 'react'
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
        <Obras></Obras>
        </div>
  )
}

export default Index