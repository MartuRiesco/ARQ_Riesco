import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
function ObrasDestacadas2({datos}) {
   return(
    <div>
        {datos.map((item)=>(<div>
         <Grid xs={4}>
            <img src={item.img} alt={item.title} />
         </Grid>
    </div>))}
    </div>

   );
}

export default ObrasDestacadas2