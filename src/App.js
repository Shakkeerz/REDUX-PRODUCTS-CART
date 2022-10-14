import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
function App() {
  return (
  <>
  <div className="p-5 bg-slate-800 text-white">

    <Header/>
    <ProductList/>
  </div>
  </>
  );
}

export default App;
