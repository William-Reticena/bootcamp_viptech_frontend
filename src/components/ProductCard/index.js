import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { EDIT_PRODUCT, PAYMENT } from "../../routes/routes";
import { ModalDelete } from "./modalDelete";
import formatNumber from "../../utils/formatNumber";
import api from "../../services/api";

const actionButtons = [
  {
    icon: <ShoppingCart />,
    color: "primary",
    to: PAYMENT,
  },
  { icon: <Edit />, color: "primary", to: EDIT_PRODUCT },
  { icon: <Delete />, color: "error", to: "#" },
];

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = (button) => {
    if (button.to !== "#") {
      navigate(`${button.to}/${product.id}`);
    }
    // console.log(button.to);
    handleOpen();
  };

  const handleDelete = async () => {
    // alert("Item deletado com sucesso!");
    await api.delete(`/product/${product.id}`);
    window.location.reload();
    // handleClose();
  };

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
            {`R$ ${formatNumber(product.price)}`}
          </Typography>
          <Typography variant="caption">{`Cor: ${product.color}`}</Typography>
        </Box>

        <Box sx={styles.boxActionsButtons}>
          {actionButtons.map((button, index) => (
            <Fab
              color={button.color}
              key={index}
              size="small"
              sx={styles.fab}
              onClick={() => handleClick(button)}
            >
              {button.icon}
            </Fab>
          ))}
        </Box>

        <ModalDelete
          open={open}
          product={product}
          onClose={handleClose}
          onConfirm={handleDelete}
        />
      </Paper>
    </ThemeProvider>
  );
};
