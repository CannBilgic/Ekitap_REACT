import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import Basket from "./pages/Basket";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar></Navbar>
          <div id="content">
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/product/:product_id" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/basket" element={<Basket />} />
            </Routes>
          </div>
        </div>
      </Router>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
