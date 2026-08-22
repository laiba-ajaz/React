import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary px-4 py-2">
      <div className="container-fluid d-flex justify-content-between align-items-center">

        <NavLink className="navbar-brand fs-3 fw-bold text-white m-0" to="/">Laiba Ajaz</NavLink>

        <div className="d-flex gap-3 align-items-center">
          <NavLink className={({ isActive }) => isActive ? "nav-link text-white fw-bold active border-bottom border-2 border-white" : "nav-link text-white-50"} to="/">Home</NavLink>


          <NavLink
            className={({ isActive }) => isActive ? "nav-link text-white fw-bold active border-bottom border-2 border-white" : "nav-link text-white-50"} to="/projects"> Projects </NavLink>

          <NavLink
            className={({ isActive }) => isActive ? "nav-link text-white fw-bold active border-bottom border-2 border-white" : "nav-link text-white-50"} to="/contact">  Contact </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;