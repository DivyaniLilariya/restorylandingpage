import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./comonents/Home";
import About from "./comonents/About";
import Contact from "./comonents/Contact";
import Services from "./comonents/Services";
import NavBar from "./comonents/NavBar";
import Footer from "./comonents/herosection/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
