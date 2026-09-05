import React from "react";
import { useState, useEffect } from "react";

function ISS() {
  const url = "http://api.open-notify.org/iss-now.json";

  const [issData, setIssData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setIssData(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container my-5">
      <style>{`
        .iss-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 60vh;
        }

        .iss-card {
          background: linear-gradient(135deg, #0f172a, #1e3a8a);
          color: #fff;
          border-radius: 20px;
          padding: 40px;
          width: 100%;
          max-width: 380px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(30, 58, 138, 0.35);
        }

        .iss-icon {
          font-size: 3.5rem;
          margin-bottom: 10px;
        }

        .iss-sub {
          opacity: 0.85;
          margin-bottom: 24px;
        }

        .iss-detail-box {
          background: rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          padding: 14px;
        }

        .iss-detail-label {
          font-size: 0.8rem;
          opacity: 0.8;
        }

        .iss-detail-value {
          font-size: 1.1rem;
          font-weight: 600;
        }

        .iss-timestamp {
          margin-top: 20px;
          font-size: 0.8rem;
          opacity: 0.7;
        }
      `}</style>

      <h2 className="text-center fw-bold mb-2">ISS Live Location</h2>
      <p className="text-center text-muted mb-4">
        Real-time International Space Station position from open-notify.org
      </p>

      <div className="iss-wrapper">
        {loading && (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}

        {error && <p className="text-danger">Error: {error}</p>}

        {issData && (
          <div className="iss-card">
            <div className="iss-icon">🛰️</div>
            <h5 className="mb-1">ISS is currently at</h5>
            <p className="iss-sub">Live orbital coordinates</p>

            <div className="row g-3">
              <div className="col-6">
                <div className="iss-detail-box">
                  <div className="iss-detail-label">Latitude</div>
                  <div className="iss-detail-value">
                    {issData.iss_position.latitude}
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="iss-detail-box">
                  <div className="iss-detail-label">Longitude</div>
                  <div className="iss-detail-value">
                    {issData.iss_position.longitude}
                  </div>
                </div>
              </div>
            </div>

            <p className="iss-timestamp">
              Last updated:{" "}
              {new Date(issData.timestamp * 1000).toLocaleTimeString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ISS;