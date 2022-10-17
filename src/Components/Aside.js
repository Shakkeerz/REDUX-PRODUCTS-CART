import { useState } from "react";
import RandomColor from "randomcolor";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../redux/color/colorSlice";
function Aside() {
  const color = useSelector((state) => state.colorReducer.value);

  const dispatch = useDispatch();

  // const changeColor=()=>{
  //   setColor(RandomeColor())
  //   console.log(color)
  // }
  return (
    <div className="aside" style={{ backgroundColor: color }}>
      <h2 className="font-bold"> Aside</h2>
      <button
        className="bg-gray-300 px-1 border border-black"
        onClick={() => dispatch(changeColor({
          color : RandomColor()
        }))}
      >
        Change Color
      </button>
    </div>
  );
}

export default Aside;
