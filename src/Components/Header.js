import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../redux/Cart";
import { AiFillDelete } from "react-icons/ai";
function Header() {
  const { cartCount, cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  const total = cartList
    ?.map((item) => item.price)
    ?.reduce((prev, curr) => prev + curr, 0);

  return (
    <>
      <header className="flex h-32 bg-slate-600 justify-between items-center p-10">
        <div>Logo</div>
        <div className="transition  bg-slate-800 p-2 rounded-lg  relative cursor-pointer hover:bg-slate-700 hover:font-bold">
          Cart
          <span className="absolute bg-green-600 px-2 rounded-xl font-bold -top-2 -right-4 animate-pulse">
            {cartCount > 0 && cartCount}
          </span>
        </div>
        <section className="absolute bg-yellow-300 w-[200px]  bottom-10 top-24 right-5 overflow-y-scroll flex flex-col ">
          {cartList?.map((item, index) => {
            const { id, title, image, price } = item;
            return (
              <div key={index} className=" flex relative">
                <div className="w-[100px]">
                  <img src={image} alt={title} />
                </div>
                <AiFillDelete className="text-xl text-red-400 absolute right-3 top-3 hover:text-red-600 cursor-pointer" 
                onClick={()=>dispatch(removeCart(id))}
                />
                <div>
                  <p>{title}</p>
                  <p>{price}</p>
                </div>
              </div>
            );
          })}

          <h5 className="sticky bg-yellow-700 bottom-0 py-2 left-5 right-5 font-bold border border-white ">
            Total:-{total}
          </h5>
        </section>
      </header>
    </>
  );
}

export default Header;
