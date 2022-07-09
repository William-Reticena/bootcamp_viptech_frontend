import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0F4C81",
    },
  },
});

export const styles = {
  paper: {
    display: "flex",
    marginTop: "24px",
    padding: "16px",
  },

  card: {
    marginRight: "32px",
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

  typoProductPrice: {
    color: "#0F4C81",
    fontSize: "1.4em",
  },

  boxActionsButtons: {
    alignItems: "center",
    display: "flex",
  },

  fab: {
    marginLeft: "16px",
  },

  modal: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },

  modalPaper: {
    display: "flex",
    flexDirection: "column",
    height: "20%",
    justifyContent: "space-between",
    padding: "24px",
    width: "40%",
  },

  modalBox: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
  },
};
