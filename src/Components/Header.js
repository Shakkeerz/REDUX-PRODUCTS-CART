import { useSelector } from "react-redux";

function Header() {
  const color = useSelector(state=>state.colorReducer.value)
  const counter = useSelector(state=>state.counter.value)
  return (
    <div className="header" style={{backgroundColor:color}}>
      <h1>REDUX Project</h1>
      <h3 className="font-bold">{counter} </h3>
    </div>
  );
}

export default Header;
