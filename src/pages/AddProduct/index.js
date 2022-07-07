import React from "react";
import { useNavigate } from "react-router";
import { AddPhotoAlternate } from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Header, Layout } from "../../components";
import { styles, theme } from "./styles";
import { LIST_PRODUCTS } from "../../routes/routes";

export const AddProduct = () => {
  const navigate = useNavigate();

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      onClick={() => navigate(LIST_PRODUCTS)}
    >
      MUI
    </Link>,
    <Typography key="3" color="text.primary">
      Adicionar Produto
    </Typography>,
  ];
  return (
    <Layout>
      <Header />

      <ThemeProvider theme={theme}>
        <Box component="form" sx={styles.boxMain}>
          <Breadcrumbs separator=">" sx={styles.breadcrumbs}>
            {breadcrumbs}
          </Breadcrumbs>

          <Typography sx={styles.typoTitle} variant="h1">
            Adicionar Produto
          </Typography>

          <TextField
            fullWidth
            label="Nome do Produto"
            margin="normal"
            size="small"
            placeholder="Digite o nome do produto"
          />

          <TextField
            fullWidth
            label="Marca"
            margin="normal"
            placeholder="Digite a marca do produto"
            size="small"
          />

          <Box sx={styles.boxSub}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">R$</InputAdornment>
                ),
              }}
              label="Valor"
              margin="normal"
              placeholder="000,00"
              size="small"
            />

            <FormControl fullWidth sx={styles.formControl} size="small">
              <InputLabel id="select-color">Cor</InputLabel>
              <Select
                id="select-color"
                label="Cor"
                name="productColor"
                value=""
                // onChange={formik.handleChange}
              >
                <MenuItem value={"Branco"}>Branco</MenuItem>
                <MenuItem value={"Preto"}>Preto</MenuItem>
                <MenuItem value={"Azul"}>Azul</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Data de Cadastro"
              margin="normal"
              size="small"
              // type="date"
            />
            <AddPhotoAlternate />

            <Box>
              <Button fullWidth variant="contained" size="large">
                Adicionar Produto
              </Button>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Layout>
  );
};
