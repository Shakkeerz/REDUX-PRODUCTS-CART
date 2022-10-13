import "./App.css";
import SideBar from "./components/SideBar";
import Update from "./components/Update";
import Footer from './components/Footer'
function App() {
  return (
    <div className="App" style={{ backgroundColor: "gray", height: "100vh" }}>
      <h1>Hello Shakkeer</h1>
      <Update/>
      <SideBar/>

      <div >
        <Footer/>
      </div>
    </div>
  );
}

export default App;
