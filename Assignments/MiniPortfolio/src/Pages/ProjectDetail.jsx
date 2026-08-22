import { useParams, Link } from "react-router-dom";
import featuredProjects from "../Data/Project";

function ProjectDetail() {
    const { id } = useParams();

    const project = featuredProjects.find(
        (project) => project.id === Number(id)
    );


    return (
        <div className="bg-black text-white min-vh-100 py-5 d-flex align-items-center justify-content-center">
            <div className="container d-flex justify-content-center">
                <div className="card bg-dark text-white border-secondary shadow-sm" style={{ maxWidth: "500px", width: "100%" }}>
                    <div className="card-body p-4 text-center">
                        <h5 className="card-title fw-bold mb-3">{project.title}</h5>
                        <p className="card-text text-white-50">{project.description}</p>

                        <Link to="/projects" className="btn btn-outline-light btn-sm mt-3">
                            Back to Projects
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;