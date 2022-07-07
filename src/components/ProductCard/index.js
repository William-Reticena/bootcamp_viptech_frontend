import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Fab,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Delete, Edit, ShoppingCart } from "@mui/icons-material";
import { styles, theme } from "./styles";

const actionButtons = [
  {
    icon: <ShoppingCart />,
    color: "primary",
  },
  { icon: <Edit />, color: "primary" },
  { icon: <Delete />, color: "error" },
];

export const ProductCard = ({ product }) => {
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} sx={styles.paper}>
        <Card elevation={0} sx={styles.card}>
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
          <Typography
            component="div"
            sx={styles.typoProductPrice}
            variant="caption"
          >
            {`R$ ${product.price}`}
          </Typography>
          <Typography variant="caption">{`Cor: ${product.color}`}</Typography>
        </Box>

        <Box sx={styles.boxActionsButtons}>
          {actionButtons.map((button, index) => (
            <Fab color={button.color} key={index} size="small" sx={styles.fab}>
              {button.icon}
            </Fab>
          ))}
        </Box>
      </Paper>
    </ThemeProvider>
  );
};
