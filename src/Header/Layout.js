import React from "react";
import {Grid,Typography }from '@mui/material';

export default function Layout(){
    return(

        <Grid container  item xs={12}    sx={{padding:"20px "}}>
                    <Grid   item xs={4}>

  <Grid item xs={10}  >
  <Typography variant="h1" component="h2"    sx={{fontSize:"30px",paddingLeft:"30px",}}>
    JORDAN SMITH PHOTOGRAPHY
</Typography>

  </Grid>
  </Grid>

  <Grid item xs={5} sx={{display:"flex",justifyContent:"center",paddingLeft:"90px",paddingTop:"10px"}} >

  <Grid item xs={2}    >
  <Typography variant="h1" component="h2"   sx={{fontSize:"20px",}}>
    Home
</Typography>

</Grid>
<Grid item xs={2}    >
<Typography variant="h1" component="h2"   sx={{fontSize:"20px",}}>
    About Me
</Typography>

</Grid>
<Grid item xs={2}     >
<Typography variant="h1" component="h2"    sx={{fontSize:"20px",}}>
    Portfolio
</Typography>

</Grid>
<Grid item xs={2}    >
<Typography variant="h1" component="h2"    sx={{fontSize:"20px",}}>
    Contact
</Typography>
</Grid>

</Grid>
  </Grid>

    );
}