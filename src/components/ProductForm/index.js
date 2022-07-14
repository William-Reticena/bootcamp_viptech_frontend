import React, { useRef, useState } from "react";
import * as yup from "yup";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useFormik } from "formik";
import { formatISO } from "date-fns";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { styles } from "./styles";
import AddPhoto from "../../img/Add_photo_alternate.png";

export const ProductForm = ({ edit, initialValues, onSubmit }) => {
  const [value, setValue] = useState(
    initialValues.productDate ? initialValues.productDate : new Date()
  );
  const photoRef = useRef();
  const fileRef = useRef();

  const schema = yup.object().shape({
    productName: yup.string().required("Este campo é obrigatório!"),
    productBrand: yup.string().required("Este campo é obrigatório!"),
    productPrice: yup
      .string()
      .required("Este campo é obrigatório!")
      .matches(
        /(^[0-9]*(,|\.)?([0-9]{0,2})?$)(?![A-Za-z])/,
        "Deve conter apenas números"
      )
      .matches(
        /^[0-9]*(,|\.)?([0-9]{0,2})?$/,
        "Use apenas duas casas decimais"
      ),
    productColor: yup.string().required("Este campo é obrigatório!"),
  });

  const formik = useFormik({
    validationSchema: schema,
    initialValues,
    onSubmit,
  });

  const handleChange = (newValue) => {
    setValue(formatISO(newValue));

    formik.setFieldValue("productDate", formatISO(newValue));
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

        formik.setFieldValue("productImgObj", fileRef.current.files[0]);
      };

      reader.readAsDataURL(fileRef.current.files[0]);
    });
  };

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <TextField
        error={formik.touched.productName && !!formik.errors.productName}
        fullWidth
        label="Nome do Produto"
        helperText={formik.touched.productName && formik.errors.productName}
        margin="normal"
        name="productName"
        placeholder="Digite o nome do produto"
        size="small"
        value={formik.values.productName}
        onChange={formik.handleChange}
      />

      <TextField
        error={formik.touched.productBrand && !!formik.errors.productBrand}
        fullWidth
        label="Marca"
        helperText={formik.touched.productBrand && formik.errors.productBrand}
        margin="normal"
        name="productBrand"
        placeholder="Digite a marca do produto"
        size="small"
        value={formik.values.productBrand}
        onChange={formik.handleChange}
      />

      <Box sx={styles.boxSub}>
        <TextField
          error={formik.touched.productPrice && !!formik.errors.productPrice}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">R$</InputAdornment>
            ),
          }}
          label="Valor"
          helperText={formik.touched.productPrice && formik.errors.productPrice}
          margin="normal"
          name="productPrice"
          placeholder="000,00"
          size="small"
          value={formik.values.productPrice}
          onChange={formik.handleChange}
        />
        <FormControl
          error={formik.touched.productColor && !!formik.errors.productColor}
          fullWidth
          sx={styles.formControl}
          size="small"
        >
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

          {formik.touched.productColor && formik.errors.productColor && (
            <FormHelperText>{formik.errors.productColor}</FormHelperText>
          )}
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
            alt="Imagem do produto"
            height={100}
            ref={photoRef}
            src={formik.values.productImg ? formik.values.productImg : AddPhoto}
            style={styles.img}
            width={100}
          />
        </Box>
        <input accept="image/*" hidden ref={fileRef} type="file" />
        <Box>
          <Button fullWidth type="submit" variant="contained">
            {!!edit ? "Salvar Produto" : "Adicionar Produto"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
