import React from 'react';
import Hero from '../components/hero';
import ProjectCard from '../components/ProjectsCards';
import Skill from '../components/skill';
import CTA from '../components/CTA';
import { useEffect } from 'react';

export default function Home() {


  useEffect(() => {
    alert("Welcome to my Portfolio")
  }, []);
  return (
    <div className="bg-black text-white min-vh-100 py-4">

      <Hero />

      <hr className="border-secondary opacity-25 container my-5" />

      {/* project section */}
      <section className="container">
        <h3 className="h4 text-uppercase tracking-wider text-white-50 mb-4">Featured Projects</h3>
        <ProjectCard />
      </section>


      <hr className="border-secondary opacity-25 container my-5" />


      {/* tech stack section */}
      <section className="container">
        <h3 className="h4 text-uppercase tracking-wider text-white-50 mb-4">Tech Stack</h3>
        <Skill />
      </section>


      <hr className="border-secondary opacity-25 container my-5" />

      {/* CTA section */}
      <section className="container">
        <h3 className="h4 text-uppercase tracking-wider text-white-50 mb-4">Get in Touch </h3>
        <CTA />
      </section>

    </div>
  );
}