import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import { Award, CheckCircle } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <div className="theme-light">
      <Navbar theme="light" />
      
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <AnimatedSection>
            <h1>About Me</h1>
            <p>Add a brief introductory sentence about who you are and your mission here.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* My Story */}
      <section className="story-section container">
        <div className="story-grid">
          <AnimatedSection className="story-image placeholder-img">
            {/* Image Placeholder */}
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="story-content">
            <h2>My Story</h2>
            <p>This is a placeholder for your background story. Write a few sentences about how you started in fitness and what drives you.</p>
            <p>You can use this second paragraph to talk about your experience, your struggles, and how you overcame them to become a trainer.</p>
            <p>Use this final paragraph to state your current goals and how you plan to help your clients achieve their own success.</p>
            <div className="certs-badges">
              <span className="badge"><Award size={16} /> Certification One</span>
              <span className="badge"><Award size={16} /> Certification Two</span>
              <span className="badge"><Award size={16} /> Certification Three</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <h2>Training Philosophy</h2>
              <p>Briefly describe the core pillars of your training approach.</p>
            </div>
          </AnimatedSection>
          
          <div className="philosophy-grid">
            <AnimatedSection delay={0.1} className="philosophy-card">
              <CheckCircle size={32} className="philosophy-icon" />
              <h3>Pillar One</h3>
              <p>Describe your first training principle or philosophy here.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="philosophy-card">
              <CheckCircle size={32} className="philosophy-icon" />
              <h3>Pillar Two</h3>
              <p>Describe your second training principle or philosophy here.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="philosophy-card">
              <CheckCircle size={32} className="philosophy-icon" />
              <h3>Pillar Three</h3>
              <p>Describe your third training principle or philosophy here.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta container">
        <AnimatedSection className="about-cta-content">
          <h2>Ready to get started?</h2>
          <Button to="/contact" variant="primary">Contact Me</Button>
        </AnimatedSection>
      </section>

      <Footer theme="light" />
    </div>
  );
}
