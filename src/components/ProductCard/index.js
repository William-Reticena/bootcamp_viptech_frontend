import React from "react";
import { Box, Card, CardMedia, Fab, Paper, Typography } from "@mui/material";
import { Delete, Edit, ShoppingCart } from "@mui/icons-material";

const actionsButtons = [
  {
    icon: <ShoppingCart />,
    color: "primary",
  },
  { icon: <Edit />, color: "primary" },
  { icon: <Delete />, color: "error" },
];

export const ProductCard = ({ product }) => {
  return (
    <Paper
      elevation={4}
      sx={{ display: "flex", marginTop: "24px", padding: " 16px" }}
    >
      <Card elevation={0} sx={{ width: "130px", marginRight: "32px" }}>
        <CardMedia
          alt={product.name}
          component="img"
          src={product.img}
          height={110}
          sx={{ objectFit: "contain" }}
          width={40}
        />
      </Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        <Typography component="div" sx={{ fontSize: "1.1em" }} variant="h2">
          {product.name}
        </Typography>
        <Typography variant="caption">{product.brand}</Typography>
        <Typography
          component="div"
          sx={{ color: "#0F4C81", fontSize: "1.4em" }}
          variant="caption"
        >
          {`R$ ${product.price}`}
        </Typography>
        <Typography variant="caption">{`Cor: ${product.color}`}</Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        {actionsButtons.map((action) => (
          <Fab color={action.color} size="small" sx={{ marginLeft: "16px" }}>
            {action.icon}
          </Fab>
        ))}
      </Box>
    </Paper>
  );
};
