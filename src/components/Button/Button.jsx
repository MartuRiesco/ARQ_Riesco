/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';
import './style.css'

function Button({info, label, year}) {
  const [Text, setText] = useState(false);
  const handleBotonClick = () => {
    setText(!Text);
  };
 let buttonLabel
  if (label===true) {
    buttonLabel= year
    
  }else{
     buttonLabel = Text ? 'Leer menos' : 'Saber Más';
  }

   return (
   
    <> 
      {Text && <div>{info}</div>}
      <button  className='button' onClick={handleBotonClick} >
        {buttonLabel}
      </button>
     
    </>
  )
}

export default Button