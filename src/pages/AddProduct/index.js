import React, { useState } from "react";
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
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Header, Layout } from "../../components";
import { styles, theme } from "./styles";
import { LIST_PRODUCTS } from "../../routes/routes";

export const AddProduct = () => {
  const [value, setValue] = useState(new Date());
  const navigate = useNavigate();

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
      Adicionar Produto
    </Typography>,
  ];

  const handleChange = (newValue) => {
    setValue(newValue);
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
            Adicionar Produto
          </Typography>

          <Box component="form">
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

              <FormControl fullWidth sx={styles.formControl}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    label="Data de Cadastro"
                    inputFormat="dd/MM/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => (
                      <TextField {...params} size="small" />
                    )}
                  />
                </LocalizationProvider>
              </FormControl>

              <Box sx={styles.boxIcon}>
                <AddPhotoAlternate color="grey" sx={styles.icon} />
                <Typography
                  color="gray"
                  sx={styles.typoCaption}
                  variant="caption"
                >
                  Adicionar fotos
                </Typography>
              </Box>

              <Box>
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  onClick={() => navigate(LIST_PRODUCTS)}
                >
                  Adicionar Produto
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Layout>
  );
};
