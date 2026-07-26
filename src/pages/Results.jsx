import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import { Star } from 'lucide-react';
import './Results.css';

export default function Results() {
  const testimonials = [
    { name: "Client Name", text: "This is a placeholder for a client testimonial. Add a quote about how your services helped them.", rating: 5 },
    { name: "Client Name", text: "This is a placeholder for a client testimonial. Add a quote about how your services helped them.", rating: 5 },
    { name: "Client Name", text: "This is a placeholder for a client testimonial. Add a quote about how your services helped them.", rating: 5 },
    { name: "Client Name", text: "This is a placeholder for a client testimonial. Add a quote about how your services helped them.", rating: 5 },
    { name: "Client Name", text: "This is a placeholder for a client testimonial. Add a quote about how your services helped them.", rating: 5 },
    { name: "Client Name", text: "This is a placeholder for a client testimonial. Add a quote about how your services helped them.", rating: 5 }
  ];

  return (
    <div className="theme-light">
      <Navbar theme="light" />
      
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <AnimatedSection>
            <h1>Client Results</h1>
            <p>Add a brief description about the success stories and transformations of your clients.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Recap */}
      <section className="stats-recap">
        <div className="container stats-grid">
          <AnimatedSection className="stat-card">
            <h3>1,000+</h3>
            <p>Statistic One</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="stat-card">
            <h3>99%</h3>
            <p>Statistic Two</p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="stat-card">
            <h3>500+</h3>
            <p>Statistic Three</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="gallery-section container">
        <AnimatedSection>
          <div className="section-header">
            <h2>Transformations</h2>
          </div>
        </AnimatedSection>

        <div className="before-after-grid">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1} className="ba-card">
              <div className="ba-image-wrapper">
                <div className="ba-image placeholder-img"></div>
                <div className="ba-labels">
                  <span className="label-before">Before</span>
                  <span className="label-after">After</span>
                </div>
              </div>
              <div className="ba-info">
                <h4>Client Story {item}</h4>
                <p>Transformation Description</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Written Testimonials Grid */}
      <section className="testimonials-grid-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <h2>What Clients Say</h2>
            </div>
          </AnimatedSection>
          
          <div className="masonry-grid">
            {testimonials.map((t, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="testimonial-card">
                <div className="stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p>"{t.text}"</p>
                <div className="t-author">
                  <div className="t-photo placeholder-img"></div>
                  <span>{t.name}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="results-cta container">
        <AnimatedSection className="about-cta-content">
          <h2>Ready for your own transformation?</h2>
          <Button to="/contact" variant="primary">Get Started</Button>
        </AnimatedSection>
      </section>

      <Footer theme="light" />
    </div>
  );
}
