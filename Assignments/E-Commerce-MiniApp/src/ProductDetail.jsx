import React from "react";
import { useParams, Link } from "react-router-dom";
import ProductArray from "./Data/ProductArray";

function ProductDetail() {
  const { id } = useParams();
  const product = ProductArray.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="container my-4">
        <p className="text-center mt-5 text-secondary">
          Product not found.
        </p>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-center align-items-center mt-4">
        <div className="card shadow-sm border rounded-3 overflow-hidden w-100" style={{ maxWidth: "420px" }}>
          {/* Image */}
          <div
            className="d-flex align-items-center justify-content-center p-4 border-bottom bg-light overflow-hidden"
            style={{ height: "260px" }}
          >
            <img
              src={product.image}
              alt={product.ProductName}
              className="mw-100 mh-100"
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* primary */}
          <div className="card-body d-flex flex-column align-items-center text-center p-4">
            <span className="text-primary text-uppercase small fw-semibold mb-1">
              {product.category}
            </span>

            <h2 className="fs-4 fw-bold text-dark mb-2">
              {product.ProductName}
            </h2>

            <p className="text-secondary small mb-2">
              {product.ProductDescription}
            </p>

            <h4 className="fw-bold text-dark mt-2 mb-3">
              Rs. {product.price}
            </h4>

            <div className="d-flex gap-3 w-100">
              <button className="btn btn-primary text-white fw-medium flex-fill">
                Add to Cart
              </button>
              <Link to="/" className="btn btn-secondary text-white fw-medium flex-fill">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;