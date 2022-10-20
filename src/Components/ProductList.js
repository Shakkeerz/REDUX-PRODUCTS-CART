import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import products from "../api/product.json";
import { AfterCart, BeforeCart } from "./Path";

function ProductList() {
    const {cartCount,cartList} = useSelector(state=>state.cart)
console.log(cartList)
  return (
    <section className="flex flex-wrap gap-3">
      {products?.map((product) => {
        const { id, image, title } = product;
        return (
          <div key={id} className="flex flex-col items-center">
            <div className="w-[200px]">
              <img src={image} alt={title} className="w-full object-cover" />
            </div>
            <h3>{title}</h3>
            {cartCount <= 0 ? (
              <BeforeCart  />
            ) : (
              <AfterCart  product={product}/>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default ProductList;
