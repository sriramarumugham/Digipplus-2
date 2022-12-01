import { Route, Routes } from "react-router-dom";

import { Header, Menu } from "../components/index";
import { Home } from "../pages/index";
import "../styles/App.scss";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="bodySession">
        <Home />
      </div>
      {/* <Header /> */}

      {/* <div className="bodySession">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div> */}
    </div>
  );
}

export default App;
