import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Share2 } from 'lucide-react';
import './Footer.css';

export default function Footer({ theme = 'dark' }) {
  return (
    <footer className={`footer ${theme}`}>
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            BRAND<span>.</span>
          </Link>
          <p>Add a short description about your brand or mission statement in this space.</p>
          <div className="social-links">
            <a href="#" aria-label="Website"><Globe size={24} /></a>
            <a href="#" aria-label="Email"><Mail size={24} /></a>
            <a href="#" aria-label="Share"><Share2 size={24} /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/results">Results</Link>
        </div>
        
        <div className="footer-contact">
          <h3>Contact Info</h3>
          <p>your.email@example.com</p>
          <p>(555) 123-4567</p>
          <p>City, State, Zip</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Brand Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
