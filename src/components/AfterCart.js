import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/cart";

function AfterCart({ product }) {
  const style = "p-4 bg-slate-400 border-2 border-black font-bold";
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.cartCount);

  const cartItems = useSelector((state) => state.cart.cartList);
// console.log("id",id)
  return (
    <div className="flex gap-2">
      <button className={style} onClick={() => dispatch(decrement(product))}>
        -
      </button>
      <div className={style}>{cartCount}</div>
      <button className={style} onClick={() => dispatch(increment(product))}>
        +
      </button>
    </div>
  );
}

export default AfterCart;
