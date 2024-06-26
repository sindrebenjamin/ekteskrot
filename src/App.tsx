import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./global.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import { CartContext } from "./context/CartContext";
import { Product } from "./interfaces";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  return (
    <>
      <ScrollToTop />
      <CartContext.Provider value={{ cart, setCart }}>
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<CheckoutSuccess />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </CartContext.Provider>
    </>
  );
}

export default App;
