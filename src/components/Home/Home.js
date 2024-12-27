import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Plant Disease Detection</h1>
          <p>Identify and treat plant diseases with our AI-powered analysis</p>
          <Link to="/analyze" className="cta-button">
            Start Analysis
          </Link>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon">🔍</div>
          <h3>Plant Identification</h3>
          <p>Instantly analyze and identify plant diseases using our advanced AI technology</p>
          <Link to="/analyze" className="feature-button">
            Analyze Now
          </Link>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🌤️</div>
          <h3>Weather Updates</h3>
          <p>Get real-time weather updates and plant care recommendations</p>
          <Link to="/weather" className="feature-button">
            Check Weather
          </Link>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Analysis History</h3>
          <p>View your past analyses and track plant health over time</p>
          <Link to="/history" className="feature-button">
            View History
          </Link>
        </div>

        <div className="feature-card">
          <div className="feature-icon">ℹ️</div>
          <h3>About Us</h3>
          <p>Learn more about our mission and the technology behind our plant disease detection</p>
          <Link to="/about" className="feature-button">
            Learn More
          </Link>
        </div>
      </div>

      <div className="info-section">
        <div className="info-content">
          <h2>Why Choose Our Platform?</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-icon">🎯</span>
              <h4>Accurate Detection</h4>
              <p>Advanced AI algorithms for precise disease identification</p>
            </div>
            <div className="info-item">
              <span className="info-icon">⚡</span>
              <h4>Fast Results</h4>
              <p>Get instant analysis and treatment recommendations</p>
            </div>
            <div className="info-item">
              <span className="info-icon">📱</span>
              <h4>Easy to Use</h4>
              <p>Simple interface for quick plant disease detection</p>
            </div>
            <div className="info-item">
              <span className="info-icon">🌿</span>
              <h4>Plant Health</h4>
              <p>Comprehensive care guides for healthy plants</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
