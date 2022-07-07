import React from "react";
import { Grid } from "@mui/material";
import { styles } from "./styles";

export const Layout = ({ children }) => {
  return (
    <Grid container sx={styles.gridContainer}>
      <Grid item xs={2} />

      <Grid item xs={8}>
        {children}
      </Grid>

      <Grid item xs={2} />
    </Grid>
  );
};
