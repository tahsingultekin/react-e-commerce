import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import CartProvider from "./context/CartProvider.jsx";
import SingleProductProvider from "./context/SingleProductProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AuthProvider from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <SingleProductProvider>
            <MainLayout>
              <App />
            </MainLayout>
          </SingleProductProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
