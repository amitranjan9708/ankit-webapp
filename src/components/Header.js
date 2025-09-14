import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, Menu, X, User } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <p>✨ Free Shipping on Orders Above ₹2,999 | Authentic Rajasthani Craftsmanship ✨</p>
          </div>
        </div>
      </div>
      
      <div className="header-main">
        <div className="container">
          <div className="header-content">
            <div className="logo-section">
              <div className="logo">
                <h1>श्रीवेस्ता</h1>
                <span className="logo-subtitle">SHRIVESTA</span>
              </div>
            </div>

            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <ul className="nav-list">
                <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                <li><a href="#collections" onClick={() => setIsMenuOpen(false)}>Collections</a></li>
                <li><a href="#lehengas" onClick={() => setIsMenuOpen(false)}>Lehengas</a></li>
                <li><a href="#sarees" onClick={() => setIsMenuOpen(false)}>Sarees</a></li>
                <li><a href="#kurtis" onClick={() => setIsMenuOpen(false)}>Kurtis</a></li>
                <li><a href="#bridal" onClick={() => setIsMenuOpen(false)}>Bridal</a></li>
                <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
              </ul>
            </nav>

            <div className="header-actions">
              <div className="search-box">
                <Search size={20} />
                <input type="text" placeholder="Search ethnic wear..." />
              </div>
              
              <div className="action-icons">
                <button className="icon-btn">
                  <User size={22} />
                </button>
                <button className="icon-btn">
                  <Heart size={22} />
                  <span className="badge">2</span>
                </button>
                <button className="icon-btn cart-btn">
                  <ShoppingBag size={22} />
                  <span className="badge">{cartCount}</span>
                </button>
              </div>

              <button className="menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
