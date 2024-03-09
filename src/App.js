import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home.jsx";
import Dynamic from "./components/DynamicPage/Dynamicpage.jsx";
import NavBar from "./components/NavBar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container-wrapper">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dynamic/:page" element={<Dynamic />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
