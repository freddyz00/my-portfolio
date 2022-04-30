import "./App.css";
import Home from "./pages/Home";
import WorkNow from "./pages/WorkNow";
import HungryNow from "./pages/HungryNow";
import WeBuild from "./pages/WeBuild";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/worknow" element={<WorkNow />} />
        <Route path="/hungrynow" element={<HungryNow />} />
        <Route path="/webuild" element={<WeBuild />} />
      </Routes>
    </div>
  );
}

export default App;
