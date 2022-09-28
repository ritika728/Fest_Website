import Home from "./components/home/home";
import React from "react";
import About from './components/about/about';
import Events from './components/events/events';
import { Route, Routes, useLocation } from "react-router-dom";
// import Navbar from './components/navbar/navbar'
import Contact from "./components/contact/contact";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const location=useLocation();
  // const ishome = location.pathname==="/"
    return (
      <>
        {/* {!ishome && <Navbar />} */}
        <SideBar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </>
    );

}

export default App;
