import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddProduct from "./pages/AddProduct";
import ProductList from "./pages/ProductList";
import CartList from "./pages/CartList";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/addcart" element={<CartList />} />
      </Routes>
    </Router>
  );
}
export default App;
