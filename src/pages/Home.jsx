import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import { Target, Activity, Apple, Users, ArrowRight } from 'lucide-react';
import './Home.css';

export default function Home() {
  return (
    <div className="theme-dark">
      <Navbar theme="dark" />
      
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <AnimatedSection>
            <h1>Your Main<br/>Headline Here.</h1>
            <p>This is a placeholder for your main hero description. Add a compelling sentence about your fitness services here.</p>
            <div className="hero-ctas">
              <Button to="/contact" variant="primary">Primary Action</Button>
              <Button to="/programs" variant="outline">Secondary Action</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar">
        <div className="container trust-container">
          <AnimatedSection delay={0.1} className="trust-item">
            <h3>100+</h3>
            <p>Metric One</p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="trust-item">
            <h3>10+</h3>
            <p>Metric Two</p>
          </AnimatedSection>
          <AnimatedSection delay={0.3} className="trust-item">
            <h3>XYZ</h3>
            <p>Metric Three</p>
          </AnimatedSection>
        </div>
      </div>

      {/* Why Train With Me */}
      <section className="why-section container">
        <AnimatedSection>
          <div className="section-header">
            <h2>Why Choose Us</h2>
            <p>Add a short description about what makes your training unique.</p>
          </div>
        </AnimatedSection>

        <div className="features-grid">
          <AnimatedSection delay={0.1} className="feature-card">
            <Target size={40} className="feature-icon" />
            <h3>Feature One</h3>
            <p>Describe your first key feature or service benefit in this space.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="feature-card">
            <Activity size={40} className="feature-icon" />
            <h3>Feature Two</h3>
            <p>Describe your second key feature or service benefit in this space.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.3} className="feature-card">
            <Apple size={40} className="feature-icon" />
            <h3>Feature Three</h3>
            <p>Describe your third key feature or service benefit in this space.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.4} className="feature-card">
            <Users size={40} className="feature-icon" />
            <h3>Feature Four</h3>
            <p>Describe your fourth key feature or service benefit in this space.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="testimonial-highlight">
        <div className="container">
          <AnimatedSection className="testimonial-content">
            <div className="quote-mark">"</div>
            <h2>This is a placeholder for a featured client testimonial. Highlight your best success story here.</h2>
            <div className="testimonial-author">
              <div className="author-photo"></div>
              <div>
                <h4>Client Name</h4>
                <p>Client Result</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Transformation Teaser */}
      <section className="transformations-teaser container">
        <AnimatedSection>
          <div className="section-header split">
            <div>
              <h2>Success Stories</h2>
              <p>Add a brief subtitle for your results section.</p>
            </div>
            <Button to="/results" variant="outline">
              View All Results <ArrowRight size={20} style={{ marginLeft: '10px' }}/>
            </Button>
          </div>
        </AnimatedSection>

        <div className="transformations-grid">
          <AnimatedSection delay={0.1} className="transformation-card placeholder-img"></AnimatedSection>
          <AnimatedSection delay={0.2} className="transformation-card placeholder-img"></AnimatedSection>
          <AnimatedSection delay={0.3} className="transformation-card placeholder-img"></AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <AnimatedSection>
            <h2>Ready to Begin?</h2>
            <p>Add a final call to action description here to encourage contact.</p>
            <Button to="/contact" variant="primary">Contact Us Now</Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer theme="dark" />
    </div>
  );
}
