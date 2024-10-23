import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex justify-center p-4 bg-slate-600">
        <ul className="flex space-x-6 list-none">
          <li className="text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white">
            <Link to="/register">Register</Link>
          </li>
          <li className="text-white">
            <Link to="/login">Login</Link>
          </li>
          <li className="text-white">
            <Link to="/addproduct">Add Product</Link>
          </li>
          <li className="text-white">
            <Link to="/productlist">ProductList</Link>
          </li>
          <li className="text-white">
            <Link to="/addcart">Cart</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
