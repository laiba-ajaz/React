import React from 'react';
import { Link } from 'react-router-dom';
import featuredProjects from '../Data/Project';

export default function ProjectCard() {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {featuredProjects.map((project) => (
        <div className="col" key={project.id}>
          <div className="card bg-dark text-white border-secondary h-100 shadow-sm">
            <div className="card-body p-4 d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title fw-bold mb-2">{project.title}</h5>
                <p className="card-text text-white-50 small">{project.description}</p>
              </div>
              <div className="mt-3">
                <Link to={`/projectDetail/${project.id}`} className="btn btn-outline-light btn-sm">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}