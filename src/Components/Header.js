import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const { cartCount, cartList } = useSelector((state) => state.cart);
  console.log(cartCount);
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
          {cartList.map((item) => {
            const { id, title, image } = item;
            return (
              <div key={id} className=" flex">
                <div className="w-[100px]">
                  <img src={image} alt={title} />
                </div>
                <div>
                  <p>{title}</p>
                  <p>$ 20</p>
                </div>
              </div>
            );
          })}
        </section>
      </header>
    </>
  );
}

export default Header;
