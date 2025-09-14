import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Star, Filter } from 'lucide-react';
import { products, categories } from '../data/products';
import './ProductGrid.css';

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace(/[₹,]/g, '')) - parseInt(b.price.replace(/[₹,]/g, ''));
      case 'price-high':
        return parseInt(b.price.replace(/[₹,]/g, '')) - parseInt(a.price.replace(/[₹,]/g, ''));
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const ProductCard = ({ product }) => (
    <div className="product-card">
      {product.isNew && <div className="product-badge new">New</div>}
      {product.isBestseller && <div className="product-badge bestseller">Bestseller</div>}
      
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-overlay">
          <button className="overlay-btn">
            <Eye size={18} />
          </button>
          <button className="overlay-btn">
            <Heart size={18} />
          </button>
          <button className="overlay-btn primary">
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-colors">
          {product.colors.map((color, index) => (
            <div 
              key={index} 
              className="color-dot" 
              style={{ backgroundColor: color.toLowerCase() }}
              title={color}
            ></div>
          ))}
        </div>
        
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill="currentColor" />
          ))}
          <span>(4.8)</span>
        </div>
        
        <div className="product-price">
          <span className="current-price">{product.price}</span>
          <span className="original-price">{product.originalPrice}</span>
          <span className="discount">
            {Math.round((1 - parseInt(product.price.replace(/[₹,]/g, '')) / parseInt(product.originalPrice.replace(/[₹,]/g, ''))) * 100)}% OFF
          </span>
        </div>
        
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );

  return (
    <section className="products-section" id="collections">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Exquisite Collections</h2>
          <p className="section-subtitle">
            Handpicked designs that celebrate the timeless beauty of Indian craftsmanship
          </p>
        </div>
        
        <div className="filters-section">
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="sort-controls">
            <button 
              className="filter-toggle"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} />
              Filters
            </button>
            
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>
        
        <div className="products-grid">
          {sortedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="load-more-section">
          <button className="load-more-btn">Load More Collections</button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
