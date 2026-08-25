import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductArray from "./Data/ProductArray";

function Product() {


  const [searchProduct, setsearchProduct] = useState('');

  const filteredProduct = ProductArray.filter((product) => product.ProductName.toLowerCase().includes(searchProduct.toLowerCase())
  );



  return (
    <div className="container my-4">

      <div className="d-flex justify-content-center mb-4">
        <input type="text" placeholder="Search Product by name" name="searchProduct" value={searchProduct} onChange={(e) => { setsearchProduct(e.target.value) }} className="form-control text-center" style={{ maxWidth: "400px" }}
        />
      </div>




      <div className="row g-4">
        {filteredProduct.map((product) => (
          <div key={product.id} className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2-4 d-flex">
            <div className="card product-card shadow-sm w-100 h-100">
              {/* Image */}
              <div className="product-img-wrap d-flex align-items-center justify-content-center p-3 border-bottom bg-light">
                <img src={product.image} alt={product.ProductName} className="product-img" />
              </div>

              <div className="card-body d-flex flex-column p-3">
                <h6 className="product-title mb-2">  {product.ProductName} </h6>

                <div className="flex-grow-1"></div>

                <div className="d-flex align-items-center justify-content-between pt-2 mt-2 border-top">
                  <span className="fw-bold text-dark"> Rs. {product.price}</span>
                  <Link to={`/ProductDetail/${product.id}`} className="btn btn-primary btn-sm text-white fw-medium" >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;