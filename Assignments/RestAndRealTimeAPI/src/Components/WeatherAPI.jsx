import React from 'react';
import { useState, useEffect } from 'react';

function WeatherAPI() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=24.86&longitude=67.01&current_weather=true";

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container my-5">
      <style>{`
        .weather-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 60vh;
        }

        .weather-card {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: #fff;
          border-radius: 20px;
          padding: 40px;
          width: 100%;
          max-width: 380px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.3);
        }

        .weather-icon {
          font-size: 3.5rem;
          margin-bottom: 10px;
        }

        .weather-temp {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .weather-sub {
          opacity: 0.85;
          margin-bottom: 24px;
        }

        .weather-detail-box {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          padding: 14px;
        }

        .weather-detail-label {
          font-size: 0.8rem;
          opacity: 0.8;
        }

        .weather-detail-value {
          font-size: 1.1rem;
          font-weight: 600;
        }
      `}</style>

      <h2 className="text-center fw-bold mb-2">Weather API</h2>
      <p className="text-center text-muted mb-4">
        Live weather data fetched from open-meteo.com
      </p>

      <div className="weather-wrapper">
        {loading && (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}

        {error && <p className="text-danger">Error: {error}</p>}

        {weather && (
          <div className="weather-card">
            <div className="weather-icon">🌤️</div>
            <div className="weather-temp">
              {weather.current_weather.temperature}°C
            </div>
            <p className="weather-sub">Karachi, Pakistan</p>

            <div className="row g-3">
              <div className="col-6">
                <div className="weather-detail-box">
                  <div className="weather-detail-label">Wind Speed</div>
                  <div className="weather-detail-value">
                    {weather.current_weather.wind_speed} km/h
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="weather-detail-box">
                  <div className="weather-detail-label">Wind Dir.</div>
                  <div className="weather-detail-value">
                    {weather.current_weather.winddirection}°
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherAPI;