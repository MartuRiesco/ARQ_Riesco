/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './style.css'

function Button({onClick,props}) {
   return (
   
    <div><button  className='button' onClick={onClick} >{props}</button></div>
  )
}

export default Button