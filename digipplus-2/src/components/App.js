import { Route, Routes } from "react-router-dom";

import { Header, Menu } from "../components/index";

import { Home } from "../pages/index";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <div id="menuList">
        <Menu />
      </div>
      <div id="rightSession">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
