import React, { useEffect, useState } from "react";
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
// import { products } from "../../fakeData/products/products";
import formatNumber from "../../utils/formatNumber";
import api from "../../services/api";
import { formatISO } from "date-fns";

export const EditProduct = () => {
  const navigate = useNavigate();
  const [initialValues, setInicialValues] = useState({});
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
        setInicialValues({
          productName: data.name,
          productBrand: data.brand,
          productPrice: formatNumber(data.price),
          productColor: data.color,
          productDate: new Date(data.created_at),
          productImg: data.img,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [id]);

  const handleEdit = async (values) => {
    alert(JSON.stringify(values, null, 2));

    const {
      productName,
      productBrand,
      productPrice,
      productColor,
      productDate,
      productImgObj,
      productImg,
    } = values;

    // console.log(parseFloat(productPrice.toString().replace(",", ".")));

    const file = new FormData();

    file.append("file", productImgObj);
    file.append("name", productName);
    file.append("brand", productBrand);
    file.append("price", parseFloat(productPrice.toString().replace(",", ".")));
    file.append("color", productColor);
    file.append("img", productImg);
    file.append("created_at", formatISO(productDate));

    try {
      await api.put(`/product/${id}`, file);
    } catch (error) {
      console.log(error);
    }

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

          {Object.keys(initialValues).length ? (
            <ProductForm
              edit
              initialValues={initialValues}
              onSubmit={handleEdit}
            />
          ) : (
            <></>
          )}
        </Box>
      </ThemeProvider>
    </Layout>
  );
};
