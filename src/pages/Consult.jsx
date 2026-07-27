import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import { CheckCircle } from 'lucide-react';
import './Contact.css';

export default function Consult() {
  const [bookingState, setBookingState] = useState('initial'); // 'initial', 'booking', 'success'

  const handleSimulate = () => setBookingState('booking');
  
  const handleConfirm = (e) => {
    e.preventDefault();
    setBookingState('success');
  };

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
            {bookingState === 'initial' && (
              <>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Interactive Calendar Placeholder</h3>
                <p style={{ marginBottom: '2rem', maxWidth: '400px' }}>This area is designed for embedding a booking widget like Calendly, Acuity, or Square Appointments.</p>
                <Button variant="primary" onClick={handleSimulate}>Simulate Booking Process</Button>
              </>
            )}

            {bookingState === 'booking' && (
              <form onSubmit={handleConfirm} style={{ width: '100%', maxWidth: '400px', textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>Pick a Date & Time</h3>
                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label htmlFor="date" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-light)' }}>Date</label>
                  <input type="date" id="date" required style={{ width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid var(--text-muted-light)', background: 'var(--bg-light)', color: 'var(--text-light)' }} />
                </div>
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="time" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-light)' }}>Time</label>
                  <select id="time" required style={{ width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid var(--text-muted-light)', background: 'var(--bg-light)', color: 'var(--text-light)' }}>
                    <option value="">Select a time...</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                  </select>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Button type="submit" variant="primary">Confirm Booking</Button>
                </div>
              </form>
            )}

            {bookingState === 'success' && (
              <div style={{ textAlign: 'center' }}>
                <CheckCircle size={64} style={{ color: 'var(--accent-color)', margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>Booking Confirmed!</h3>
                <p style={{ color: 'var(--text-muted-light)', marginBottom: '2rem' }}>We've sent a confirmation email with your meeting details. We look forward to speaking with you!</p>
                <Button variant="outline" onClick={() => setBookingState('initial')}>Book Another</Button>
              </div>
            )}
          </div>
        </AnimatedSection>
      </section>

      <Footer theme="light" />
    </div>
  );
}
