import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cars from "./pages/Cars";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
