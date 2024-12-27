// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SettingsProvider } from './context/SettingsContext';
import Home from './components/Home/Home';
import PlantIdentifier from './components/Analysis/PlantIdentifier';
import History from './components/History/History';
import About from './components/About/About';
import WeatherIntegration from './components/Weather/WeatherIntegration';
import SlidingNav from './components/SlidingNavigation/SlidingNav';
import { HistoryProvider } from './context/HistoryContext';
import './App.css';

function App() {
  return (
    <HistoryProvider>
      <Router>
        <SettingsProvider>
          <div className="app">
            <SlidingNav />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/analyze" element={<PlantIdentifier />} />
                <Route path="/history" element={<History />} />
                <Route path="/weather" element={<WeatherIntegration />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
          </div>
        </SettingsProvider>
      </Router>
    </HistoryProvider>
  );
}

export default App;
