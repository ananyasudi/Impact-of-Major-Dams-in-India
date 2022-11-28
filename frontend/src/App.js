import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import Home from "./components/common/Home";
// import Navbar from "./components/templates/Navbar";
import Navbar from "./components/templates/Navbar";
import SardarSarovar from "./components/common/SardarSarovar";
import BhakraNangal from "./components/common/Bhakra";
import Tehri from "./components/common/Tehri";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sardarsarovar" element={<SardarSarovar />} />
          <Route path="/bhakranangal" element = {<BhakraNangal />} />
          <Route path="/tehri" element = {<Tehri />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
