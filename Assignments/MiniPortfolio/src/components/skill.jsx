import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaBootstrap, FaLaravel, FaGitAlt } from "react-icons/fa";

export default function Skill() {
    const skills = [
        { id: 1, name: 'HTML5', logo: <FaHtml5 className="fs-3 text-white" /> },
        { id: 2, name: 'CSS3', logo: <FaCss3Alt className="fs-3 text-white" /> },
        { id: 3, name: 'JavaScript', logo: <FaJs className="fs-3 text-white" /> },
        { id: 4, name: 'PHP', logo: <FaPhp className="fs-3 text-white" /> },
        { id: 5, name: 'React.js', logo: <FaReact className="fs-3 text-white" /> },
        { id: 6, name: 'Bootstrap', logo: <FaBootstrap className="fs-3 text-white" /> },
        { id: 7, name: 'Laravel', logo: <FaLaravel className="fs-3 text-white" /> },
        { id: 8, name: 'Git', logo: <FaGitAlt className="fs-3 text-white" /> }
    ];

    return (
        <section className="container py-5 text-center text-white">

            <div className="d-flex flex-wrap justify-content-center gap-3">
                {skills.map((skill) => (
                    <div key={skill.id} className="d-flex align-items-center gap-2 bg-dark border border-secondary px-4 py-2   rounded-3 shadow-sm" > {skill.logo}
                        <span className="fw-medium text-capitalize">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}