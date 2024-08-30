import React from "react";
import { Grid, Link, Typography } from "@mui/material";
import Button from "@mui/material/Button";

export default function Image() {
  return (
    <Grid container item xs={12}>
      <Grid
        item
        xs={9}
        sx={{
          position: "absolute",
          textAlign: "left",
          padding: "300px 0px 0px 200px",
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h1"
            component="h2"
            sx={{ fontSize: "30px", lineHeight: "60px" }}
          >
            JORDAN SMITH PHOTOGRAPHY
          </Typography>
          <Typography
            variant="h1"
            component="h2"
            sx={{ fontSize: "40px", lineHeight: "60px" }}
          >
            Capturing Moments, Creating Memories
          </Typography>
          <Typography
            variant="h1"
            component="h2"
            sx={{ fontSize: "22px", lineHeight: "60px" }}
          >
            Transforming Life's Stories into Timeless Images
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={9}
        sx={{
          display: "flex",
          position: "absolute",
          textAlign: "left",
          padding: "490px 0px 0px 202px",
        }}
      >
        <Grid item xs={4}>
          <Button
            variant="contained"
            sx={{ bgcolor: "black", width: "200px", fontSize: "20px" }}
          >
            Contact Us
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Link
            sx={{
              fontSize: "28px",
              lineHeight: "30px",
              padding: "25px 0px 0px 100px",
            }}
          >
            Portfolio
          </Link>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid item xs={12}>
          <img
            src="https://www.shutterstock.com/image-photo/couple-walking-on-mountain-trail-260nw-2414889881.jpg
"
            alt="not found"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
