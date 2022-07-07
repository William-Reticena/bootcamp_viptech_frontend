import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ADD_PRODUCT, LIST_PRODUCTS } from "./routes/routes";
import { AddProduct, ListProducts } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LIST_PRODUCTS} element={<ListProducts />} />
        <Route path={ADD_PRODUCT} element={<AddProduct />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
