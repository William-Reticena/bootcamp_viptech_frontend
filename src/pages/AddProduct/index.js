import React from "react";
import { useNavigate } from "react-router";
import { formatISO } from "date-fns";
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
import api from "../../services/api";

export const AddProduct = () => {
  const navigate = useNavigate();

  const breadcrumbs = [
    <Link
      sx={{ color: "#0F4C81" }}
      underline="hover"
      key="1"
      // color="primary"
      onClick={() => navigate(LIST_PRODUCTS)}
    >
      Home
    </Link>,
    <Typography key="2" sx={{ color: "#0F4C81" }}>
      Adicionar Produto
    </Typography>,
  ];

  const initialValues = {
    productName: "",
    productBrand: "",
    productPrice: "",
    productColor: "",
    productDate: formatISO(new Date()),
    productImg: "",
    productImgObj: "",
  };

  const handleCreate = async (values) => {
    alert(JSON.stringify(values, null, 2));

    // const {
    //   productName,
    //   productBrand,
    //   productPrice,
    //   productColor,
    //   productDate,
    //   productImgObj,
    // } = values;

    // const file = new FormData();

    // file.append("file", productImgObj);
    // file.append("name", productName);
    // file.append("brand", productBrand);
    // file.append("price", productPrice);
    // file.append("color", productColor);
    // file.append("created_at", productDate);

    // try {
    //   await api.post("/product", file);

    //   navigate(LIST_PRODUCTS);
    // } catch (error) {
    //   console.log(error);
    // }
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
            Adicionar Produto
          </Typography>

          <ProductForm initialValues={initialValues} onSubmit={handleCreate} />
        </Box>
      </ThemeProvider>
    </Layout>
  );
};
