import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Cart";

function BeforeCart() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(addToCart())} className="bg-slate-600 py-1 px-3">Add-To-Cart</button>
    </div>
  );
}

export default BeforeCart;
