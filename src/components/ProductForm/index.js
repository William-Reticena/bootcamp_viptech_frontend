import React, { useRef, useState } from "react";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useFormik } from "formik";
import { formatISO } from "date-fns";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import AddPhoto from "../../img/Add_photo_alternate.png";
import { LIST_PRODUCTS } from "../../routes/routes";
import { styles } from "./styles";

export const ProductForm = ({ initialValues }) => {
  const [value, setValue] = useState(new Date());
  const navigate = useNavigate();
  const photoRef = useRef();
  const fileRef = useRef();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      navigate(LIST_PRODUCTS);
    },
  });

  const handleChange = (newValue) => {
    setValue(formatISO(newValue));
    // console.log(newValue);
    formik.setFieldValue("productDate", formatISO(newValue));
    // console.log(formatISO(newValue));
  };

  const handleImgClick = () => {
    const reader = new FileReader();
    fileRef.current.click();

    fileRef.current.addEventListener("change", () => {
      reader.onload = () => {
        photoRef.current.src = reader.result;

        formik.setFieldValue(
          "productImg",
          URL.createObjectURL(fileRef.current.files[0])
        );

        formik.setFieldValue("productImgName", fileRef.current.files[0].name);

        console.log(fileRef.current.files[0].name);
      };

      // reader.onabort = () => {
      //   photoRef.current.src = AddPhoto;
      // };

      reader.readAsDataURL(fileRef.current.files[0]);
    });
  };

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        label="Nome do Produto"
        margin="normal"
        name="productName"
        placeholder="Digite o nome do produto"
        size="small"
        value={formik.values.productName}
        onChange={formik.handleChange}
      />

      <TextField
        fullWidth
        label="Marca"
        margin="normal"
        name="productBrand"
        placeholder="Digite a marca do produto"
        size="small"
        value={formik.values.productBrand}
        onChange={formik.handleChange}
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
          name="productPrice"
          placeholder="000,00"
          size="small"
          value={formik.values.productPrice}
          onChange={formik.handleChange}
        />

        <FormControl fullWidth sx={styles.formControl} size="small">
          <InputLabel id="select-color">Cor</InputLabel>
          <Select
            id="select-color"
            label="Cor"
            name="productColor"
            value={formik.values.productColor}
            onChange={formik.handleChange}
          >
            <MenuItem value={"Branco"}>Branco</MenuItem>
            <MenuItem value={"Preto"}>Preto</MenuItem>
            <MenuItem value={"Azul"}>Azul</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={styles.formControl}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              inputFormat="dd/MM/yyyy"
              label="Data de Cadastro"
              name="productDate"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} size="small" />}
            />
          </LocalizationProvider>
        </FormControl>

        <Box sx={styles.boxIcon} onClick={handleImgClick}>
          <img
            alt="#"
            height={100}
            ref={photoRef}
            src={AddPhoto}
            style={styles.img}
            width={100}
          />
        </Box>

        <input accept="image/*" hidden ref={fileRef} type="file" />

        <Box>
          <Button fullWidth size="large" type="submit" variant="contained">
            Adicionar Produto
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
