import React, { useState } from 'react';
import './Language.css';

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'ml', name: 'മലയാളം', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
    { code: 'bn', name: 'বাংলা', flag: '🇮🇳' },
    { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
    { code: 'ur', name: 'اردو', flag: '🇮🇳' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
  ];

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language.name);
    // Add logic to change the application language
  };

  return (
    <div className="language-page">
      <h1>Select Your Language</h1>
      <p>Choose your preferred language from the options below</p>
      
      <div className="language-grid">
        {languages.map((language) => (
          <button
            key={language.code}
            className={`language-option ${selectedLanguage === language.name ? 'selected' : ''}`}
            onClick={() => handleLanguageChange(language)}
          >
            <span className="language-flag">{language.flag}</span>
            <span className="language-name">{language.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Language;
