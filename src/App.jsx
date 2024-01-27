import { Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";

import ProductDetailPage from "./pages/ProductDetailPage";
import AllProductPage from "./pages/AllProductPage";
import CartPage from "./pages/CartPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import CategoryPage from "./pages/CategoryPage";
import AuthPage from "./pages/AuthPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/products" element={<AllProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/search-results" element={<SearchResultsPage />} />
      <Route path="/categories/:id" element={<CategoryPage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};

export default App;
