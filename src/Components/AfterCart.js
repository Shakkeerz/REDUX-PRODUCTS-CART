import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/Cart";

function AfterCart({ product }) {
  const { cartCount, cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const style = "p-1 px-3 bg-slate-300 hover:bg-slate-400";

  return (
    <div>
      <div>
        <button className={style} onClick={() => dispatch(decrement(product))}>
          -
        </button>
        <span className="mx-2">{cartCount}</span>
        <button className={style} onClick={() => dispatch(increment(product))}>
          +
        </button>
      </div>
    </div>
  );
}

export default AfterCart;
