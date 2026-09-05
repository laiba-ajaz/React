import React from 'react';
import { useState, useEffect } from 'react';

function ProductAPI() {

  const url = "https://fakestoreapi.com/products?limit=6";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container my-5">
      <style>{`
        .product-card {
          border: none;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.15);
        }

        .product-img {
          height: 200px;
          object-fit: contain;
          background-color: #f8f9fa;
        }

        .product-price {
          color: #2563eb;
          font-weight: 700;
        }

        .product-desc {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          color: #555;
        }
      `}</style>

      <h2 className="text-center fw-bold mb-2">Products API</h2>
      <p className="text-center text-muted mb-4">
        Live product data fetched from fakestoreapi.com
      </p>

      {loading && (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && <h3 className="text-danger text-center">Error: {error}</h3>}

      {!error && !loading && (
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4">
              <div className="card product-card h-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top product-img p-3"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <h6 className="product-price mb-2">${product.price}</h6>
                  <p className="card-text small product-desc">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductAPI;