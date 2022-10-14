import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart";

function BeforeCart({product}) {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="px-4 py-2 bg-yellow-500 rounded-lg transition"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to cart
      </button>
    </div>
  );
}

export default BeforeCart;
