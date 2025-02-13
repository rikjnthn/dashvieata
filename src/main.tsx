import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./style/global.css";

import RootLayout from "./root-layout";
import SettingsPage from "./pages/settings";
import Products from "./pages/products";
import WithHeaderLayout from "./layout/with-header";
import Product from "./pages/product";
import AddProduct from "./pages/add-product";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<WithHeaderLayout />}>
            <Route path="products" element={<Products />} />
            <Route path="product/:productId" element={<Product />} />
            <Route path="add-product" element={<AddProduct />} />
          </Route>
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
