import React, { useState } from "react";
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
  Tooltip,
  Typography,
} from "@mui/material";
import {
  AddCircleOutline,
  Info,
  RemoveCircleOutline,
} from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { Header, Layout } from "../../components";
import { styles, theme } from "./styles";
import { LIST_PRODUCTS } from "../../routes/routes";
import { products } from "../../fakeData/products/products";
import countNumberNotes from "../../utils/countNumberNotes";
import isPlural from "../../utils/isPlural";
import formatNumber from "../../utils/formatNumber";

export const ProductPayment = () => {
  const [banknotes, setBanknotes] = useState([]);
  const [isPurchased, setIsPurchased] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products[id - 1];

  const subtotal = product.price * inputValue;
  const shipping = subtotal * 0.1;
  const total = subtotal + shipping;

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
      Carrinho
    </Typography>,
  ];

  const handleChange = (event) => {
    setInputValue(event.target.value);

    if (parseInt(event.target.value) <= 0 || isNaN(event.target.value)) {
      setInputValue(1);
    }
  };

  const handleBlur = (event) => {
    if (event.target.value === "") setInputValue(1);
  };

  const increment = () => setInputValue((prev) => prev + 1);
  const decrement = () => {
    if (inputValue > 1) setInputValue((prev) => prev - 1);
  };

  const handlePurchase = () => {
    setBanknotes(countNumberNotes(total));

    setIsPurchased((prevState) => !prevState);
  };

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
                  <IconButton disabled={!!isPurchased} onClick={decrement}>
                    <RemoveCircleOutline />
                  </IconButton>

                  <TextField
                    disabled={!!isPurchased}
                    size="small"
                    sx={styles.typoQtd}
                    value={inputValue}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />

                  <IconButton disabled={!!isPurchased} onClick={increment}>
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
                <Typography component="span" sx={styles.typoOrderSummary}>
                  {`Subtotal ${
                    inputValue
                      ? `(${inputValue} ${isPlural(inputValue, "item")})`
                      : ""
                  }`}
                </Typography>

                <Typography
                  component="span"
                  sx={styles.typoOrderSummary}
                >{`R$ ${formatNumber(subtotal)}`}</Typography>
              </Box>

              <Divider />

              <Box sx={styles.boxOrderSummary}>
                <Typography component="span" sx={styles.typoOrderSummary}>
                  Frete
                  <Tooltip arrow title="Preço calculado em 10% do produto">
                    <Info color="error" fontSize="small" sx={styles.infoIcon} />
                  </Tooltip>
                </Typography>

                <Typography
                  component="span"
                  sx={styles.typoOrderSummary}
                >{`R$ ${formatNumber(shipping)}`}</Typography>  
              </Box>

              <Divider />

              <Box sx={styles.boxOrderSummary}>
                <Typography component="span" sx={styles.typoOrderSummary}>
                  Valor Total
                </Typography>

                <Typography
                  component="span"
                  sx={styles.typoOrderSummary}
                >{`R$ ${formatNumber(total)}`}</Typography>
              </Box>

              <Button
                disabled={!!isPurchased}
                fullWidth
                size="large"
                variant="contained"
                onClick={handlePurchase}
              >
                Pagar
              </Button>
            </Card>

            {!!isPurchased && (
              <Card sx={styles.cardPaymentFinished} variant="outlined">
                <Typography sx={styles.typoPaymentSuccess}>
                  <strong>Pagamento realizado com Sucesso!</strong>
                </Typography>

                <Typography sx={styles.typoAmountNotes}>
                  Este pagamento foi realizado com
                </Typography>

                {banknotes.map((item, index) => (
                  <Typography key={index} sx={styles.typoMoneyBill}>
                    <strong>{`${item.amount} ${isPlural(
                      item.amount,
                      "cédula"
                    )}`}</strong>{" "}
                    de <strong>{`R$ ${item.bankNote},00`}</strong>
                  </Typography>
                ))}
              </Card>
            )}
          </Box>
        </Box>
      </ThemeProvider>
    </Layout>
  );
};
