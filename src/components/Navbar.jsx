import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import './Navbar.css';

export default function Navbar({ theme = 'dark' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
        <Link to="/" className="navbar-logo">
          DEMO COACH<span>.</span>
        </Link>

        <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/results">Results</Link>
          <Link to="/contact">Contact</Link>
          <div className="navbar-cta-mobile">
            <Button to="/login" variant="outline">Sign In</Button>
            <Button to="/consult" variant="primary">Book Consult</Button>
          </div>
        </div>

        <div className="navbar-cta-desktop">
          <Button to="/login" variant="outline">Sign In</Button>
          <Button to="/consult" variant="primary">Book Consult</Button>
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
