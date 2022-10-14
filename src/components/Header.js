import React from "react";
import {BsFillCartFill} from 'react-icons/bs'
import { useSelector } from "react-redux";
function Header() {
  const cartCount = useSelector(state=>state.cart.cartCount)
  return (
    <>
      <div className="flex bg-slate-600 justify-between px-4 ">
        <div>Muhammad shakkeer</div>
        <div className="relative ">
        <BsFillCartFill className="text-3xl" />
            <span className="absolute -top-1 -left-2 bg-red-500 px-1 rounded-3xl font-bold text-sm">{cartCount}</span>
        </div>
      </div>
    </>
  );
}

export default Header;
