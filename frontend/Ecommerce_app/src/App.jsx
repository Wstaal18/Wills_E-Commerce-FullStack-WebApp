import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Login_Signup from './pages/Login_Signup';
import Footer from './components/footer/footer';
import men_banner from './components/assets/men_banner.png';
import women_banner from './components/assets/women_banner.png';
import kids_banner from './components/assets/kids_banner.png';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="mens" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="womens" />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kids" />} />
          {/* Corrected product route */}
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login_Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
