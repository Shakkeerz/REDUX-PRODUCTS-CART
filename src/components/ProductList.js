import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import products from "../api/products.json";
import AfterCart from "./AfterCart";
import BeforeCart from "./BeforeCart";
import CartReducer from '../redux/cart'

function ProductList() {
 const cart = useSelector(state=>state.cart)

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {products?.map((product) => {
          const { id, image, title } = product;
          return (
            <div key={id}>
              <div>
                <img
                  className="transition delay-50 hover:scale-105"
                  src={image}
                  alt={title}
                />
              </div>
              <p>{title}</p>
              {cart.cartCount > 0 ? (
                <AfterCart product={product} />
              ) : (
                <BeforeCart  product={product}/>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductList;
