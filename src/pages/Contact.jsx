import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'Weight Loss',
    type: 'In-Person',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
    setFormData({
      name: '',
      email: '',
      phone: '',
      goal: 'Weight Loss',
      type: 'In-Person',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="theme-light">
      <Navbar theme="light" />
      
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <AnimatedSection>
            <h1>Contact Us</h1>
            <p>Send a message below or use our contact information to reach out.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section container">
        <div className="contact-grid">
          
          {/* Form */}
          <AnimatedSection className="contact-form-container">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="goal">Primary Goal</label>
                  <select id="goal" name="goal" value={formData.goal} onChange={handleChange}>
                    <option value="Weight Loss">Weight Loss</option>
                    <option value="Muscle Gain">Muscle Gain</option>
                    <option value="General Health">General Health</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="type">Service Type</label>
                  <select id="type" name="type" value={formData.type} onChange={handleChange}>
                    <option value="In-Person">In-Person</option>
                    <option value="Online">Online</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              
              <Button type="submit" variant="primary" className="submit-btn">
                Submit Message <Send size={18} style={{ marginLeft: '10px' }}/>
              </Button>
            </form>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={0.2} className="contact-info-container">
            <div className="info-card">
              <h2>Contact Information</h2>
              <div className="info-item">
                <Mail className="info-icon" />
                <div>
                  <h4>Email</h4>
                  <p>your.email@example.com</p>
                </div>
              </div>
              <div className="info-item">
                <Phone className="info-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h4>Location</h4>
                  <p>City, State, Zip Code</p>
                  <p className="sub-text">Additional location details here</p>
                </div>
              </div>
            </div>

            {/* Calendly Placeholder */}
            <div className="calendly-placeholder">
              <div className="calendly-inner">
                <h3>Schedule a Call</h3>
                <p>Use the calendar below to book a time that works for you.</p>
                <Button variant="outline">Open Calendar</Button>
                <p className="sub-text" style={{ marginTop: '1rem', fontSize: '0.8rem' }}>*Embed your booking tool here</p>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="map-placeholder">
              <p>Map Embed Placeholder</p>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <Footer theme="light" />
    </div>
  );
}
