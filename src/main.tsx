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
import Dashboard from "./pages/dashboard";
import TransactionsPage from "./pages/transactions-page";
import MessagesPage from "./pages/messages";
import ChatRoom from "./components/chat-room";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<WithHeaderLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="product/:productId" element={<Product />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="transactions" element={<TransactionsPage />} />
            <Route path="messages" element={<MessagesPage />}>
              <Route path=":id" element={<ChatRoom />} />
            </Route>
          </Route>
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
