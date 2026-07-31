import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import { Target, Activity, Apple, Users, ArrowRight } from 'lucide-react';
import './Home.css';

const bgMedia = [
  { type: 'image', src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop' }, // Gym photo with weights/equipment
  { type: 'image', src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop' } // Similar gym interior to requested photo
];

export default function Home() {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % bgMedia.length);
    }, 3000); // 3 seconds interval for fast changing
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="theme-dark">
      <Navbar theme="dark" />
      
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-background-container">
          {bgMedia.map((media, index) => (
            media.type === 'video' ? (
              <video
                key={index}
                className={`hero-bg-media ${index === currentMediaIndex ? 'active' : ''}`}
                autoPlay
                loop
                muted
                playsInline
                style={{ opacity: index === currentMediaIndex ? 1 : 0, zIndex: index === currentMediaIndex ? 1 : 0, transition: 'opacity 1s ease-in-out', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              >
                <source src={media.src} type="video/mp4" />
              </video>
            ) : (
              <div
                key={index}
                className={`hero-bg-media ${index === currentMediaIndex ? 'active' : ''}`}
                style={{
                  backgroundImage: `url(${media.src})`,
                  opacity: index === currentMediaIndex ? 1 : 0,
                  zIndex: index === currentMediaIndex ? 1 : 0,
                  transition: 'opacity 1s ease-in-out',
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center'
                }}
              />
            )
          ))}
        </div>
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
        
        {/* Slider Indicator Dots */}
        <div style={{ position: 'absolute', bottom: '30px', left: '0', width: '100%', display: 'flex', justifyContent: 'center', gap: '10px', zIndex: 20 }}>
          {bgMedia.map((_, index) => (
            <div 
              key={index} 
              style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: index === currentMediaIndex ? '#FF6600' : 'rgba(255,255,255,0.5)', transition: 'background-color 0.3s ease' }}
            />
          ))}
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
            <Button to="/contact" variant="primary">Join Our Journey</Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer theme="dark" />
    </div>
  );
}
