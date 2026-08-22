import { NavLink } from "react-router-dom";

export default function Bar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top border-bottom">
      <div className="container-fluid px-3 px-lg-5">
        {/* Brand */}
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <div
            className="d-flex align-items-center justify-content-center rounded"
            style={{ width: "36px", height: "36px", backgroundColor: "#0e7490", color: "#fff", fontWeight: "bold", fontSize: "1.1rem" }}
          >
            P
          </div>
          <span className="ms-2 fw-bold fs-4 text-dark">The Paper Mart</span>
        </NavLink>

        

      </div>
    </nav>
  );
}