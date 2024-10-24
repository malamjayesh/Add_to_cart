import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/product/getproduct"
        );
        setProduct(res.data.Allproductlist);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center text-center mt-5">
        <h1 className="text-4xl font-bold mb-6">Product List</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
          {product.map((item, index) => (
            <li
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h6 className="text-lg font-semibold mb-2">{item.productName}</h6>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <h4 className="text-xl font-bold text-indigo-600">
                {item.price}
              </h4>
              <h5 className="text-sm text-gray-500 mt-2">{item.category}</h5>
              <button className="bg-lime-600 text-white font-semibold px-4 py-2 rounded-lg mt-4 flex place-items-start">
                Add to cart
              </button>
              <button className="bg-red-600 text-white font-semibold  rounded-lg flex mt-4 p-2">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default ProductList;
