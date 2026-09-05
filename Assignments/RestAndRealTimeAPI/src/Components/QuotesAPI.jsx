import React, { useState, useEffect } from 'react';
import './QuotesAPI.css';

const url = "https://dummyjson.com/quotes?limit=9";

function QuotesAPI() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data.quotes))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-2">Quotes API</h2>
      <p className="text-center text-muted mb-4">
        Random quotes fetched live from dummyjson.com
      </p>

      {loading && (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && (
        <p className="text-danger text-center">Error: {error}</p>
      )}

      <div className="row g-4">
        {quotes.map((quote) => (
          <div key={quote.id} className="col-12 col-md-6 col-lg-4">
            <div className="quote-card h-100">
              
              <p className="quote-text">{quote.quote}</p>
              <p className="quote-author">— {quote.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuotesAPI;