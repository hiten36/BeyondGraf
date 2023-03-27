import React from 'react'
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const [mode, setMode] = useState("Light");

  return (
    <>
      <BrowserRouter>
        <Navbar setMode={setMode} mode={mode} />
        <Routes>
          <Route path="/" element={<Home mode={mode} />} />
        </Routes>
        <Footer mode={mode} />
      </BrowserRouter>
    </>
  )
}

export default App;
