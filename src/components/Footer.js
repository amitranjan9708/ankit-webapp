import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube,
  Heart,
  Truck,
  Shield,
  RotateCcw,
  Award
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-features">
        <div className="container">
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">
                <Truck size={24} />
              </div>
              <div className="feature-content">
                <h4>Free Shipping</h4>
                <p>On orders above ₹2,999</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <Shield size={24} />
              </div>
              <div className="feature-content">
                <h4>Secure Payment</h4>
                <p>100% secure transactions</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <RotateCcw size={24} />
              </div>
              <div className="feature-content">
                <h4>Easy Returns</h4>
                <p>7-day return policy</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <Award size={24} />
              </div>
              <div className="feature-content">
                <h4>Authentic Quality</h4>
                <p>Handcrafted excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section brand-section">
              <div className="footer-logo">
                <h2>श्रीवेस्ता</h2>
                <span>SHRIVESTA</span>
              </div>
              <p className="brand-description">
                Celebrating the rich heritage of Rajasthani craftsmanship through 
                contemporary ethnic wear. Each piece tells a story of tradition, 
                elegance, and timeless beauty.
              </p>
              <div className="social-links">
                <a href="https://instagram.com/shrivesta" className="social-link" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com/shrivesta" className="social-link" target="_blank" rel="noopener noreferrer">
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com/shrivesta" className="social-link" target="_blank" rel="noopener noreferrer">
                  <Twitter size={20} />
                </a>
                <a href="https://youtube.com/shrivesta" className="social-link" target="_blank" rel="noopener noreferrer">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#collections">Collections</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#size-guide">Size Guide</a></li>
                <li><a href="#care-instructions">Care Instructions</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Categories</h3>
              <ul className="footer-links">
                <li><a href="#lehengas">Lehengas</a></li>
                <li><a href="#sarees">Sarees</a></li>
                <li><a href="#anarkalis">Anarkali Suits</a></li>
                <li><a href="#kurtis">Kurtis</a></li>
                <li><a href="#shararas">Shararas</a></li>
                <li><a href="#bridal">Bridal Collection</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Customer Care</h3>
              <ul className="footer-links">
                <li><a href="#shipping">Shipping Info</a></li>
                <li><a href="#returns">Returns & Exchanges</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms & Conditions</a></li>
                <li><a href="#track-order">Track Your Order</a></li>
              </ul>
            </div>

            <div className="footer-section contact-section">
              <h3>Get in Touch</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin size={18} />
                  <div>
                    <p>Pink City Plaza, MI Road</p>
                    <p>Jaipur, Rajasthan 302001</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone size={18} />
                  <div>
                    <p>+91 98765 43210</p>
                    <p>+91 87654 32109</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail size={18} />
                  <div>
                    <p>hello@shrivesta.com</p>
                    <p>support@shrivesta.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>Stay Updated with Latest Collections</h3>
              <p>Subscribe to get special offers, free giveaways, and exclusive deals.</p>
            </div>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 Shrivesta. All rights reserved. Made with <Heart size={16} fill="currentColor" /> in Jaipur.
            </p>
            <div className="payment-methods">
              <span>We Accept:</span>
              <div className="payment-icons">
                <div className="payment-icon">Visa</div>
                <div className="payment-icon">MC</div>
                <div className="payment-icon">UPI</div>
                <div className="payment-icon">GPay</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
