import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  const name = "Laiba";

  return (
    <section className="container text-center py-5 my-3">
      <h1 className="display-4 fw-bold text-white mb-3">
        Hey, my name is <span className="border-bottom border-white pb-1">{name}</span>
      </h1>
      <p className="lead text-white-50 mx-auto style={{ maxWidth: '700px' }}">
        Software Engineering student & Web Developer focused on building functional, custom web applications.
      </p>
      <div className="mt-4">
        <Link to="/projects" className="btn btn-light px-4 py-2 fw-semibold" >
          View Projects 
        </Link>
      </div>
    </section>
  );
}

export default Hero;