import { useSelector } from "react-redux";

function Footer() {
  const color = useSelector(state=>state.colorReducer.value)
  const counter = useSelector(state=>state.counter.value)
  return (
    <div className="footer" style={{backgroundColor:color}}>
      <p>My Redux project footer</p>
      <p className="font-bold ">{counter}</p>
    </div>
  );
}
export default Footer;
