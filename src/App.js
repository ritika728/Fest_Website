
import Home from "./components/home/home";
import React from "react";
import About from './components/about/about';
import Events from './components/events/events';
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from './components/navbar/navbar'

function App() {
  const location=useLocation();
  const ishome = location.pathname==="/"

    return (
      <>
        {!ishome && <Navbar />}
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </>
    );

}

export default App;
