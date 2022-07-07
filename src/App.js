import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LIST_PRODUCTS } from "./routes/routes";
import { ListProducts } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={LIST_PRODUCTS} element={<ListProducts />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
