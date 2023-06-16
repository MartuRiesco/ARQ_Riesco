import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2'

function ObrasDestacadas3({item}) {
  return (
    <div>
         <Grid xs={4}>
            <img src={item.img} alt={item.title} />
         </Grid>
    </div>
  )
}

export default ObrasDestacadas3