import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ADD_PRODUCT, LIST_PRODUCTS, PAYMENT_ROUTE } from "./routes/routes";
import { AddProduct, ProductPayment, ProductsList } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ADD_PRODUCT} element={<AddProduct />} />
        <Route path={LIST_PRODUCTS} element={<ProductsList />} />
        <Route path={PAYMENT_ROUTE} element={<ProductPayment />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
