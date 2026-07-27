import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import './Contact.css';

export default function Consult() {
  return (
    <div className="theme-light">
      <Navbar theme="light" />
      
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <AnimatedSection>
            <h1 style={{ color: 'var(--accent-color)' }}>Book a Consultation</h1>
            <p>Schedule your initial consultation to discuss your fitness goals and discover how we can achieve them together.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Consult Content */}
      <section className="contact-section container" style={{ display: 'flex', justifyContent: 'center' }}>
        <AnimatedSection className="contact-form-container" style={{ width: '100%', maxWidth: '800px', textAlign: 'center' }}>
          <h2>Select a Time</h2>
          <p style={{ color: 'var(--text-muted-light)' }}>Choose a convenient slot from the calendar below.</p>
          
          <div className="calendly-placeholder" style={{ 
            marginTop: '2rem', 
            minHeight: '500px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            background: 'var(--bg-light-alt)', 
            borderRadius: '12px', 
            border: '2px dashed var(--accent-color)',
            padding: '2rem'
          }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Interactive Calendar Placeholder</h3>
            <p style={{ marginBottom: '2rem', maxWidth: '400px' }}>This area is designed for embedding a booking widget like Calendly, Acuity, or Square Appointments.</p>
            <Button variant="primary">Simulate Booking Process</Button>
          </div>
        </AnimatedSection>
      </section>

      <Footer theme="light" />
    </div>
  );
}
