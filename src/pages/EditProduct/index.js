import React, { useEffect, useState } from "react";
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
import formatNumber from "../../utils/formatNumber";
import api from "../../services/api";

export const EditProduct = () => {
  const navigate = useNavigate();
  const [initialValues, setInicialValues] = useState("");
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

  //FALTA IMPLEMENTAR A EDIÇÃO DO PRODUTO
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await api.get(`/product/${id}`);
        console.log(data);
        setInicialValues({
          productName: data.name,
          productBrand: data.brand,
          productPrice: formatNumber(data.price),
          productColor: "Branco",
          productDate: new Date("2022-07-10T12:37:24.000Z"),
          productImg: data.img,
        });

        // console.log(product);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [id]);
  // console.log(new Date("2022-07-13T12:37:24.000Z"));

  // const initialValues = {
  //   productName: product.name,
  //   productBrand: product.brand,
  //   productPrice: formatNumber(products[id - 1].price),
  //   productColor: products[id - 1].color,
  //   productDate: formatISO(new Date().getUTCDate()),
  //   productImg: products[id - 1].img,
  //   productImgObj: "",
  // };

  const handleEdit = (values) => {
    alert(JSON.stringify(values, null, 2));
    navigate(LIST_PRODUCTS);
  };

  // useEffect(() => {
  //   console.log(product);
  // }, [product]);

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
