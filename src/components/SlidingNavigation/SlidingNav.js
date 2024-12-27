import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SlidingNav.css';

const SlidingNav = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/analyze', label: 'Analysis' },
    { path: '/history', label: 'History' },
    { path: '/weather', label: 'Weather' },
    { path: '/about', label: 'About' },
    { path: '/language', label: 'Language' }
  ];

  return (
    <div className="sliding-nav-container">
      <nav className="sliding-nav">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SlidingNav;
