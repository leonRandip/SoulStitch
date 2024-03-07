import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home.jsx";
import Dynamic from "./components/DynamicPage/Dynamicpage.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dynamic/:page" element={<Dynamic />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
