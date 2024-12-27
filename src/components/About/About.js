import React from 'react';
import './About.css';

// Import images
import chaithraImage from '../../assets/images/chaithra.jpg';
import adeshImage from '../../assets/images/adesh.jpg';
import sandeepImage from '../../assets/images/sandeep.jpg';
import manojImage from '../../assets/images/manoj.jpg';

const About = () => {
  const experts = [
    {
      name: "Chaithra R",
      phone: "8904549067",
      role: "Plant Expert - Commercial Crops",
      image: chaithraImage,
      expertise: "Commercial Crop Solutions"
    },
    {
      name: "Adesh Gowda R",
      phone: "7996494774 ",
      role: "Plant Expert - Vegetables",
      image: adeshImage,
      expertise: "Vegetable Diseases & Treatment"
    },
    {
      name: "Sandeep G L",
      phone: "9845196206",
      role: "Plant Expert - Fruits",
      image: sandeepImage,
      expertise: "Fruit Crop Management"
    },
    {
      name: "Manoj M V",
      phone: "8073708237  /  8867061417",
      role: "Technical Queries",
      image: manojImage,
      expertise: "AI & Machine Learning "
    }
  ];

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Our Expert Team</h1>
        <div className="header-underline"></div>
        <p>Get professional guidance from our agricultural specialists</p>
      </div>

      <div className="experts-grid">
        {experts.map((expert, index) => (
          <div className="expert-card" key={index}>
            <div className="expert-card-inner">
              <div className="expert-image-container">
                <img 
                  src={expert.image} 
                  alt={expert.name}
                  onError={(e) => {
                    e.target.src = '/images/default-profile.jpg';
                  }}
                />
                <div className="expert-overlay">
                  <p>{expert.expertise}</p>
                </div>
              </div>
              <div className="expert-info">
                <h3>{expert.name}</h3>
                <span className="role-badge">{expert.role}</span>
                <div className="expert-contact">
                  <a href={`tel:${expert.phone}`} className="phone-button">
                    <i className="phone-icon">📞</i>
                    {expert.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="contact-section">
        <div className="contact-content">
          <h2>Need Expert Advice?</h2>
          <p>Our team is available to help you with any plant-related queries</p>
          <a href="tel:8792048404" className="contact-button">
            Contact Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
