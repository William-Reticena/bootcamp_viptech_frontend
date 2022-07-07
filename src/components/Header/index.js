import React from "react";
import { AppBar, ThemeProvider } from "@mui/material";
import Logo from "../../img/Logo-Viptech.png";
import { styles, theme } from "./styles";

export const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar sx={styles.appBar}>
        <img src={Logo} alt="Logo da Viptech" width="250px" />
      </AppBar>
    </ThemeProvider>
  );
};
