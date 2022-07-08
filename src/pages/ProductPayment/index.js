import React from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardMedia,
  Divider,
  IconButton,
  Link,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { Header, Layout } from "../../components";
import { styles, theme } from "./styles";
import { LIST_PRODUCTS } from "../../routes/routes";
import { products } from "../../fakeData/products/products";

export const ProductPayment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products[id - 1];

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
      Carrinho
    </Typography>,
  ];

  return (
    <Layout>
      <Header />

      <ThemeProvider theme={theme}>
        <Box sx={styles.boxInfo}>
          <Breadcrumbs separator=">" sx={styles.breadcrumbs}>
            {breadcrumbs}
          </Breadcrumbs>
        </Box>

        <Box sx={styles.boxMain}>
          <Box sx={styles.boxShopping}>
            <Typography sx={styles.typoTitle} variant="h1">
              Carrinho
            </Typography>

            <Card sx={styles.cardProduct} variant="outlined">
              <Box sx={styles.boxProduct}>
                <Card elevation={0} sx={styles.cardImg}>
                  <CardMedia
                    alt={product.name}
                    component="img"
                    src={product.img}
                    height={110}
                    sx={styles.cardMedia}
                  />
                </Card>

                <Box sx={styles.boxProductInfo}>
                  <Typography component="div" sx={styles.typoProductName}>
                    {product.name}
                  </Typography>

                  <Typography variant="caption">{product.brand}</Typography>

                  <Typography variant="caption">{`Cor: ${product.color}`}</Typography>
                </Box>
              </Box>

              <Divider />

              <Box sx={styles.boxQtd}>
                <Box sx={styles.boxQtdInner}>
                  <Typography>Quantidade:</Typography>
                  <IconButton>
                    <RemoveCircleOutline />
                  </IconButton>

                  <TextField
                    size="small"
                    sx={styles.typoQtd}
                    defaultValue={10}
                  />

                  <IconButton>
                    <AddCircleOutline />
                  </IconButton>
                </Box>

                <Typography>{`R$ ${product.price}`}</Typography>
              </Box>
            </Card>
          </Box>

          <Box>
            <Typography sx={styles.typoTitle} variant="h1">
              Resumo do Pedido
            </Typography>

            <Card sx={styles.cardOrderSummary} variant="outlined">
              <Box sx={styles.boxOrderSummary}>
                <Typography component="span" sx={{fontSize: "1.2em"}}>Subtotal (1 item)</Typography>
                <Typography component="span" sx={{fontSize: "1.2em"}}>{`R$ ${product.price}`}</Typography>
              </Box>

              <Divider />

              <Box sx={styles.boxOrderSummary}>
                <Typography component="span">Frete</Typography>
                <Typography component="span">{`R$ ${product.price}`}</Typography>
              </Box>

              <Divider />

              <Box sx={styles.boxOrderSummary}>
                <Typography component="span">Valor Total</Typography>
                <Typography component="span">{`R$ ${product.price}`}</Typography>
              </Box>

              {/* <Divider /> */}
              <Button fullWidth variant="contained">Pagar</Button>
            </Card>
          </Box>
        </Box>
      </ThemeProvider>
    </Layout>
  );
};
