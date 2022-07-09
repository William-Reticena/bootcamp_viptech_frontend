import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#00264B",
    },
  },
});

export const styles = {
  boxInfo: {
    marginTop: "48px",
    width: "50%",
  },

  breadcrumbs: {
    marginBottom: "16px",
    color: "#0F4C81",
  },

  typoTitle: {
    fontSize: "2em",
    marginBottom: "40px",
  },

  boxMain: {
    display: "flex",
    gap: "32px",
  },

  boxShopping: {
    flexGrow: 1,
  },

  cardProduct: {
    padding: "8px 32px",
  },

  boxProduct: {
    display: "flex",
    padding: "8px 0 16px",
  },

  cardImg: {
    marginRight: "16px",
    width: "130px",
  },

  cardMedia: {
    objectFit: "contain",
  },

  boxProductInfo: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "center",
  },

  typoProductName: {
    fontSize: "1.1em",
  },

  boxQtd: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    margin: "50px 0",
  },

  boxQtdInner: {
    alignItems: "center",
    display: "flex",
    marginLeft: "16px",
  },

  typoQtd: {
    width: "46px",
  },

  cardOrderSummary: {
    background: "#F5F5F5",
    display: "flex",
    flexDirection: "column",
    height: "260px",
    justifyContent: "space-between",
    padding: "16px",
    width: "280px",
  },

  boxOrderSummary: {
    display: "flex",
    justifyContent: "space-between",
  },
};
