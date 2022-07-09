import React from "react";
import { formatISO } from "date-fns";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Breadcrumbs,
  Link,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Header, Layout, ProductForm } from "../../components";
import { styles, theme } from "./styles";
import { LIST_PRODUCTS } from "../../routes/routes";

export const EditProduct = () => {
  const navigate = useNavigate();

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      onClick={() => navigate(LIST_PRODUCTS)}
    >
      Home
    </Link>,
    <Typography key="2" color="text.primary">
      Editar Produto
    </Typography>,
  ];

  const initialValues = {
    productName: "",
    productBrand: "",
    productPrice: "",
    productColor: "",
    productDate: formatISO(new Date()),
    productImg: "",
    productImgName: "",
  };

  return (
    <Layout>
      <Header />

      <ThemeProvider theme={theme}>
        <Box sx={styles.boxMain}>
          <Breadcrumbs separator=">" sx={styles.breadcrumbs}>
            {breadcrumbs}
          </Breadcrumbs>

          <Typography sx={styles.typoTitle} variant="h1">
            Editar Produto
          </Typography>

          <ProductForm initialValues={initialValues} />
        </Box>
      </ThemeProvider>
    </Layout>
  );
};
