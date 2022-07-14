import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import { Header, Layout, ProductCard } from "../../components";
import { styles, theme } from "./styles";
import { ADD_PRODUCT } from "../../routes/routes";
import api from "../../services/api";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await api.get("/product");

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />

        <Layout>
          <Box sx={styles.boxWrapper}>
            <Box>
              <Typography sx={styles.typoTitle} variant="h1">
                Produtos
              </Typography>
            </Box>

            <Button
              startIcon={<AddCircle />}
              variant="contained"
              onClick={() => navigate(ADD_PRODUCT)}
            >
              Adicionar Produto
            </Button>
          </Box>

          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </Layout>
      </ThemeProvider>
    </>
  );
};
