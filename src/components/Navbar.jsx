import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import './Navbar.css';

export default function Navbar({ theme = 'dark' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const fileInputRef = useRef(null);
  
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      alert(`Lecture "${file.name}" uploaded successfully!`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navClass = `navbar ${theme} ${isScrolled ? 'scrolled' : ''}`;

  return (
    <nav className={navClass}>
      <div className="container navbar-container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Button onClick={handleUploadClick} variant="primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>Upload Lectures</Button>
          <input type="file" accept="video/*" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />
          
          <Link to="/live" className="live-now-btn">
            <span className="live-dot"></span> LIVE NOW
          </Link>
          
          <Link to="/" className="navbar-logo" style={{ whiteSpace: 'nowrap' }}>
            DEMO COACH
          </Link>
        </div>

        <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/results">Results</Link>
          <Link to="/contact">Contact</Link>
          <div className="navbar-cta-mobile">
            <Button to="/login" variant="outline" className="nav-btn">Sign In</Button>
            <Button to="/consult" variant="primary" className="nav-btn">Book Consult</Button>
          </div>
        </div>

        <div className="navbar-cta-desktop">
          <Button to="/login" variant="outline" className="nav-btn">Sign In</Button>
          <Button to="/consult" variant="primary" className="nav-btn">Book Consult</Button>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}
