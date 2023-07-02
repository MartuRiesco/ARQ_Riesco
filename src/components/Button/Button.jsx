/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './style.css'
function Button({props}) {
  return (
    <div><button className='button' >{props}</button></div>
  )
}

export default Button