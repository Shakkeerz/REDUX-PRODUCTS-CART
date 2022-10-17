import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/counter/counterSclice";
function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const style = "bg-gray-300 px-2 border-2 border-black mr-2";
  return (
    <div className="counter">
      <h2 className="font-bold">Counter</h2>
      <h3 className="font-bold">The count is - {counter}</h3>

      <button className={style} onClick={() => dispatch(decrement())}>
        Decrease
      </button>

      <button className={`${style} mr-0`} onClick={() => dispatch(increment())}>
        Increase
      </button>
    </div>
  );
}

export default Counter;
