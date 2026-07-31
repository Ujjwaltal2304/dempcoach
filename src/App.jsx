import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Results from './pages/Results';
import Contact from './pages/Contact';
import Consult from './pages/Consult';
import Login from './pages/Login';
import Live from './pages/Live';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/results" element={<Results />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/login" element={<Login />} />
        <Route path="/live" element={<Live />} />
      </Routes>
    </>
  );
}

export default App;
