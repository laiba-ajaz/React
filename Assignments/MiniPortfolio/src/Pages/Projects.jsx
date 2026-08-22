import React from 'react';
import featuredProjects from '../Data/Project';
import { Link } from 'react-router-dom';

export default function Projects() {

    return (
        <div className="bg-black text-white min-vh-100 py-5">
            <div className="container">
                <h2 className="h3 text-uppercase tracking-wider text-white-50 mb-5 text-center fw-bold">
                    My Projects
                </h2>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {featuredProjects.map((project) => (
                        <div className="col" key={project.id}>
                            <div className="card h-100 bg-dark text-white border-secondary shadow-sm">
                               
                                <div className="card-body d-flex flex-column p-4">
                                    <h5 className="card-title fw-bold mb-2">{project.title}</h5>
                                    <p className="card-text text-white-50 flex-grow-1">
                                        {project.description}
                                    </p>

                                    <Link
                                        to={`/projectDetail/${project.id}`}
                                        className="btn btn-outline-light btn-sm mt-3 align-self-start"
                                    >
                                        View Project
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}