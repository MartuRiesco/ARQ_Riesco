import React, { useEffect, useState } from 'react'
import './style.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { getObrasDestacadas } from '../../services/firebase';
import ObrasDestacadas2 from '../ObrasDestacadas2/ObrasDestacadas2';
function ObrasDestacadas() {
const [Datos, setDatos]= useState()
async function leerDatos() {
  let respuesta = await getObrasDestacadas();

  setDatos(respuesta);
}
console.log(getObrasDestacadas);
useEffect(() => {
  leerDatos();
}, []);
  return (
    <div className='obras-destacadas'>
        <div className='titulo-obras'>
            <h2>
                Obras destacadas
            </h2>
        </div>
        <div className='obras'>
            <div className='grid-obras-destacadas'>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0.5}>
<ObrasDestacadas2 datos={Datos}/>
</Grid>
</Box>
            </div>
        </div>
    </div>
  )
}

export default ObrasDestacadas