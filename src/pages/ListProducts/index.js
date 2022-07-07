import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import { Header, Layout, ProductCard } from "../../components";
import { products } from "../../fakeData/products/products";

export const ListProducts = () => {
  return (
    <>
      <Header />

      <Layout>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "56px",
          }}
        >
          <Box>
            <Typography variant="h1" sx={{ fontSize: "2em" }}>
              Produtos
            </Typography>
          </Box>

          <Button
            startIcon={<AddCircle />}
            sx={{ background: "#0F4C81" }}
            variant="contained"
          >
            Adicionar Produto
          </Button>
        </Box>

        {products.map((item, index) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </Layout>
    </>
  );
};
