import React, { useState } from 'react';
import { FaSearch, FaCloudSun, FaExclamationTriangle } from 'react-icons/fa';
import { WeatherService } from '../../services/weatherService';
import WeatherDisplay from './WeatherDisplay';
import WeatherForecast from './WeatherForecast';
import WeatherAnalysis from './WeatherAnalysis';
import './WeatherIntegration.css';

const WeatherIntegration = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Create animated stars
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 50; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 3}px`,
        height: `${Math.random() * 3}px`,
        animationDuration: `${Math.random() * 3 + 1}s`,
        animationDelay: `${Math.random() * 2}s`
      };
      stars.push(<div key={i} className="star" style={style} />);
    }
    return stars;
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    try {
      setLoading(true);
      setError(null);
      const data = await WeatherService.getWeatherByCity(searchQuery.trim());
      const forecastData = await WeatherService.getForecast(searchQuery.trim(), 5);
      setWeatherData({ ...data, forecast: forecastData });
    } catch (err) {
      console.error('Weather error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTryAgain = () => {
    setError(null);
    setWeatherData(null);
  };

  return (
    <div className="weather-page">
      <div className="weather-container">
        <div className="stars">{renderStars()}</div>
        <div className="sun">
          <div className="sun-rays"></div>
        </div>
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        
        <div className="weather-content">
          <div className="weather-header">
            <h1 className="weather-title">
              <FaCloudSun style={{ marginRight: '15px' }} />
              Weather Forecast
            </h1>
            <p className="weather-subtitle">
              Discover real-time weather updates for any location worldwide
            </p>
          </div>

          <div className="search-section">
            <div className="search-container">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter city name (e.g., Bangalore)"
                  className="search-input"
                />
                <button type="submit" className="search-button" disabled={loading}>
                  <FaSearch className="search-icon" />
                  {loading ? 'Searching...' : 'Search'}
                </button>
              </form>
            </div>
          </div>

          {loading && (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Fetching weather data... 🌤️</p>
            </div>
          )}

          {error && (
            <div className="error-container">
              <FaExclamationTriangle className="error-icon" />
              <h3>Oops!</h3>
              <p>{error}</p>
              <button onClick={handleTryAgain} className="retry-button">
                Try Again
              </button>
            </div>
          )}

          {weatherData && (
            <>
              <WeatherDisplay data={weatherData} />
              {weatherData.forecast && <WeatherForecast forecast={weatherData.forecast} />}
              <WeatherAnalysis weatherData={weatherData} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherIntegration;
