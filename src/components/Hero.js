import React from 'react';
import { ArrowRight, Star, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Authentic Rajasthani Heritage</span>
            </div>
            
            <h1 className="hero-title">
              Embrace the 
              <span className="highlight"> Royal Elegance</span>
              <br />
              of Rajasthan
            </h1>
            
            <p className="hero-description">
              Discover exquisite handcrafted ethnic wear that celebrates the rich cultural 
              heritage of Jaipur. Each piece tells a story of traditional artistry and 
              contemporary elegance, designed for the modern Indian woman.
            </p>
            
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Unique Designs</div>
              </div>
              <div className="stat">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat">
                <div className="stat-number">4.9</div>
                <div className="stat-label">
                  <Star size={16} fill="currentColor" />
                  Rating
                </div>
              </div>
            </div>
            
            <div className="hero-buttons">
              <button className="btn-primary">
                Shop Collection
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary">
                Explore Heritage
              </button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-container">
              <img 
                src="https://i.pinimg.com/1200x/32/03/07/32030718906dda2b7e3ac9a49b01efa2.jpg" 
                alt="Beautiful Indian woman in traditional Rajasthani attire"
                className="hero-main-image"
              />
              <div className="floating-elements">
                <div className="floating-card card-1">
                  <img src="https://i.pinimg.com/1200x/32/03/07/32030718906dda2b7e3ac9a49b01efa2.jpg" alt="Anarkali" />
                  <span>Anarkali Collection</span>
                </div>
                <div className="floating-card card-2">
                  <img src="https://i.pinimg.com/1200x/32/03/07/32030718906dda2b7e3ac9a49b01efa2.jpg" alt="Saree" />
                  <span>Premium Sarees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
