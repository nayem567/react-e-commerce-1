import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignup from "./Pages/LoginSignup";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import { Footer } from "./Components/Footer/Footer";
import banner_mens from "./assets/banner_mens.png";
import banner_women from "./assets/banner_women.png";
import kids_banner from "./assets/banner_kids.png";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />

        <Route path="/men" element={<ShopCategory category="men" banner ={banner_mens} />} />

        <Route path="/women" element={<ShopCategory category="women" banner={banner_women} />} />

        <Route path="/kids" element={<ShopCategory category="kid" banner={kids_banner} />} />

        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>

        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
