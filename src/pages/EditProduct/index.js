import React from "react";
import { formatISO } from "date-fns";
import { useNavigate, useParams } from "react-router-dom";
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
import { products } from "../../fakeData/products/products";

export const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      sx={{ color: "#0F4C81" }}
      onClick={() => navigate(LIST_PRODUCTS)}
    >
      Home
    </Link>,
    <Typography key="2" sx={{ color: "#0F4C81" }}>
      Editar Produto
    </Typography>,
  ];

  const initialValues = {
    productName: products[id - 1].name,
    productBrand: products[id - 1].brand,
    productPrice: products[id - 1].price,
    productColor: products[id - 1].color,
    productDate: formatISO(new Date()),
    productImg: products[id - 1].img,
    productImgName: "",
  };

  const handleEdit = (values) => {
    alert(JSON.stringify(values, null, 2));
    navigate(LIST_PRODUCTS);
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

          <ProductForm
            edit
            initialValues={initialValues}
            onSubmit={handleEdit}
          />
        </Box>
      </ThemeProvider>
    </Layout>
  );
};
