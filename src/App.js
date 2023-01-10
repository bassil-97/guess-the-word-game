import { Routes, Route } from "react-router-dom";
import "./App.css";

// Routes
import Home from "./pages/Home/Home";
import DrawingArea from "./pages/DrawingArea/DrawingArea";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/drawing-area" element={<DrawingArea />} />
      </Routes>
    </div>
  );
}

export default App;
