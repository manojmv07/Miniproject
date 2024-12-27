import React, { useState } from 'react';
import './Language.css';

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [showLanguageModal, setShowLanguageModal] = useState(false);

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
    setShowLanguageModal(false);
    // Here you can add logic to change the application language
  };

  return (
    <div className="language-container">
      <button 
        className="language-button" 
        onClick={() => setShowLanguageModal(!showLanguageModal)}
      >
        🌐 <span>Language</span>
      </button>

      {showLanguageModal && (
        <div className="language-modal">
          <div className="language-modal-content">
            <h3>Select Language</h3>
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
        </div>
      )}
    </div>
  );
};

export default Language;
