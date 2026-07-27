import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import { Dumbbell, Laptop, Utensils, Users, Check } from 'lucide-react';
import './Programs.css';

export default function Programs() {
  return (
    <div className="theme-light">
      <Navbar theme="light" />
      
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <AnimatedSection>
            <h1>Training Programs</h1>
            <p>Add a brief description of the types of services and programs you offer to your clients.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section container">
        <div className="services-grid">
          <AnimatedSection className="service-card">
            <Dumbbell size={40} className="service-icon" />
            <h3>Service One</h3>
            <p>Add a description for this service. Explain what it includes and who it is best suited for.</p>
            <p className="price-starting">Starting at ₹X/month</p>
            <Button to="/contact" variant="outline">Learn More</Button>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1} className="service-card">
            <Laptop size={40} className="service-icon" />
            <h3>Service Two</h3>
            <p>Add a description for this service. Explain what it includes and who it is best suited for.</p>
            <p className="price-starting">Starting at ₹X/month</p>
            <Button to="/contact" variant="outline">Learn More</Button>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="service-card">
            <Utensils size={40} className="service-icon" />
            <h3>Service Three</h3>
            <p>Add a description for this service. Explain what it includes and who it is best suited for.</p>
            <p className="price-starting">Starting at ₹X/month</p>
            <Button to="/contact" variant="outline">Learn More</Button>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3} className="service-card">
            <Users size={40} className="service-icon" />
            <h3>Service Four</h3>
            <p>Add a description for this service. Explain what it includes and who it is best suited for.</p>
            <p className="price-starting">Starting at ₹X/month</p>
            <Button to="/contact" variant="outline">Learn More</Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Table (Online Coaching Focus) */}
      <section className="pricing-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <h2>Pricing Plans</h2>
              <p>Provide a brief description of your pricing tiers and what they include.</p>
            </div>
          </AnimatedSection>

          <div className="pricing-grid">
            {/* Basic Plan */}
            <AnimatedSection className="pricing-card">
              <h3>Basic Tier</h3>
              <div className="price"><span>₹</span>100<span>/mo</span></div>
              <ul className="features-list">
                <li><Check size={20} className="check-icon"/> Feature Included One</li>
                <li><Check size={20} className="check-icon"/> Feature Included Two</li>
                <li><Check size={20} className="check-icon"/> Feature Included Three</li>
                <li><Check size={20} className="check-icon"/> Feature Included Four</li>
              </ul>
              <Button to="/contact" variant="outline" className="pricing-btn">Select Plan</Button>
            </AnimatedSection>

            {/* Standard Plan */}
            <AnimatedSection delay={0.1} className="pricing-card popular">
              <div className="popular-badge">Most Popular</div>
              <h3>Standard Tier</h3>
              <div className="price"><span>₹</span>200<span>/mo</span></div>
              <ul className="features-list">
                <li><Check size={20} className="check-icon"/> Feature Included One</li>
                <li><Check size={20} className="check-icon"/> Feature Included Two</li>
                <li><Check size={20} className="check-icon"/> Feature Included Three</li>
                <li><Check size={20} className="check-icon"/> Feature Included Four</li>
                <li><Check size={20} className="check-icon"/> Feature Included Five</li>
              </ul>
              <Button to="/contact" variant="primary" className="pricing-btn">Select Plan</Button>
            </AnimatedSection>

            {/* Premium Plan */}
            <AnimatedSection delay={0.2} className="pricing-card">
              <h3>Premium Tier</h3>
              <div className="price"><span>₹</span>300<span>/mo</span></div>
              <ul className="features-list">
                <li><Check size={20} className="check-icon"/> Feature Included One</li>
                <li><Check size={20} className="check-icon"/> Feature Included Two</li>
                <li><Check size={20} className="check-icon"/> Feature Included Three</li>
                <li><Check size={20} className="check-icon"/> Feature Included Four</li>
                <li><Check size={20} className="check-icon"/> Feature Included Five</li>
              </ul>
              <Button to="/contact" variant="outline" className="pricing-btn">Select Plan</Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section container">
        <AnimatedSection>
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <h4>Add your first frequently asked question here?</h4>
              <p>Provide the answer to your first frequently asked question in this space. Keep it clear and concise.</p>
            </div>
            <div className="faq-item">
              <h4>Add your second frequently asked question here?</h4>
              <p>Provide the answer to your second frequently asked question in this space. Keep it clear and concise.</p>
            </div>
            <div className="faq-item">
              <h4>Add your third frequently asked question here?</h4>
              <p>Provide the answer to your third frequently asked question in this space. Keep it clear and concise.</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="programs-cta container">
        <AnimatedSection className="about-cta-content">
          <h2>Ready to get started?</h2>
          <Button to="/contact" variant="primary">Book a Consultation</Button>
        </AnimatedSection>
      </section>

      <Footer theme="light" />
    </div>
  );
}
