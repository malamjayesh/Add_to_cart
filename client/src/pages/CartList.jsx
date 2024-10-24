import React, { useEffect, useState } from "react";
import axios from "axios";
function CartList() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post("http://localhost:5000/api/product/addcart");
      setCart(res.data);
    };
    fetchData();
  });
  return (
    <>
      <div className=" flex justify-center items-center">
        <h1>Cart List</h1>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.productName}
              {item.description}
              {item.price}
              {item.cacategory}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default CartList;
