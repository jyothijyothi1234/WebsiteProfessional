import React from "react";
import { Grid, Typography } from "@mui/material/";

export default function Specialities() {
  return (
    <Grid container item xs={12}>
      <Grid item xs={12}>
        <Grid item xs={12}   sx={{bgcolor:"red"}}>
          <Typography variant="h3" sx={{display:"flex",justifyContent:"center"}}  >Our Specialities</Typography>
        </Grid>

        <Grid item xs={9}>
          <Typography variant="h3"    sx={{fontSize:"35px",display:"flex",justifyContent:"center",bgcolor:"green",paddingLeft:"210px"}}>
            Let us bring your vision to life with our specialized photography
            services tailored to your unique needs
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={8} sx={{ display: "flex" }}>
        <Grid item xs={8}>
          <Typography variant="h3">fcghjk</Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="h3">fcghjk</Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="h3">fcghjk</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
