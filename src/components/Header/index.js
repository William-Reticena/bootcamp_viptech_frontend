import React from "react";
import { AppBar } from "@mui/material";
import Logo from "../../img/Logo-Viptech.png";

export const Header = () => {
  return (
    <AppBar
      sx={{
        alignItems: "center",
        background: "#00264B",
        display: "flex",
        height: "100px",
        justifyContent: "center",
      }}
    >
      <img src={Logo} alt="Logo da Viptech" width="250px" />
    </AppBar>
  );
};
