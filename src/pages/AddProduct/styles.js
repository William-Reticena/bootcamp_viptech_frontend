import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#00264B",
    },
    grey: {
      main: "#D9D9D9",
    },
  },
});

export const styles = {
  boxMain: {
    marginTop: "48px",
    width: "50%",
  },

  typoTitle: {
    fontSize: "2em",
  },

  breadcrumbs: {
    marginBottom: "16px",
  },

  boxSub: {
    width: "210px",
  },

  formControl: {
    margin: "16px 0 8px",
  },

  boxIcon: {
    alignItems: "center",
    border: "1px dashed #D9D9D9",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "8px 0 24px",
    padding: "24px 8px 0 8px",
    width: "88px",
  },

  icon: {
    fontSize: "40px",
  },

  typoCaption: {
    textAlign: "center",
  },
};
