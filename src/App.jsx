import React from 'react'
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Footer1 from './components/Footer/Footer1';
import Home from './components/Home/Home';
import Home1 from './components/Home/Home1';
import Navbar from './components/Navbar/Navbar';
import Navbar1 from './components/Navbar/Navbar1';

const App = () => {
  const [mode, setMode] = useState("Light");

  return (
    <>
      <BrowserRouter>
        {/* <Navbar setMode={setMode} mode={mode} /> */}
        <Navbar1 setMode={setMode} mode={mode} />
        <Routes>
          <Route path="/" element={<Home1 mode={mode} />} />
          <Route path="/home2" element={<Home mode={mode} />} />
        </Routes>
        {/* <Footer mode={mode} /> */}
        <Footer1 mode={mode} />
      </BrowserRouter>
    </>
  )
}

export default App;
