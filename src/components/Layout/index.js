import React from "react";
import { Grid } from "@mui/material";

export const Layout = ({ children }) => {
  return (
    <Grid container sx={{ marginTop: "100px" }}>
      <Grid item xs={2} />

      <Grid item xs={8}>
        {children}
      </Grid>

      <Grid item sx={2} />
    </Grid>
  );
};
