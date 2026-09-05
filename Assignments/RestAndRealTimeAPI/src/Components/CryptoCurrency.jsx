import React from 'react';
import { useState, useEffect } from 'react';

function CryptoCurrency() {
  const url = "https://api.coinlore.net/api/tickers/?start=0&limit=5";

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCoins(data.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container my-5">
      <style>{`
        .crypto-card {
          border: none;
          border-radius: 14px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .crypto-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.15);
        }

        .crypto-price {
          font-size: 1.4rem;
          font-weight: 700;
        }

        .crypto-change-up {
          color: #16a34a;
          font-weight: 600;
        }

        .crypto-change-down {
          color: #dc2626;
          font-weight: 600;
        }

        .crypto-symbol {
          background-color: #eff6ff;
          color: #2563eb;
          padding: 2px 8px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .crypto-rank {
          background-color: #f1f5f9;
          color: #475569;
          padding: 2px 8px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
        }
      `}</style>

      <h2 className="text-center fw-bold mb-2">Crypto Currency</h2>
      <p className="text-center text-muted mb-4">
        Live crypto prices fetched from coinlore.net
      </p>

      {loading && (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && <p className="text-danger text-center">Error: {error.message}</p>}

      {!loading && !error && (
        <div className="row g-4">
          {coins.map((coin) => {
            const price = parseFloat(coin.price_usd);
            const change = parseFloat(coin.percent_change_24h);
            const marketCap = parseFloat(coin.market_cap_usd);

            return (
              <div key={coin.id} className="col-12 col-sm-6 col-md-4">
                <div className="card crypto-card h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div>
                        <h6 className="mb-1">{coin.name}</h6>
                        <span className="crypto-symbol">{coin.symbol}</span>
                      </div>
                      <span className="crypto-rank">#{coin.rank}</span>
                    </div>

                    <div className="crypto-price mb-1">
                      ${price.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </div>

                   

                    <p className="text-muted small mt-2 mb-0">
                      Market Cap: ${marketCap.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CryptoCurrency;