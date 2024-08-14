import { Link } from "react-router-dom";
import "./css/TopMenuEscritorio.css";

export const TopMenuEscritorio = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid collapseMenu">
        <a className="navbar-brand" href="/">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Consultorios
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Planes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link active linkLoginMobile">
                Login
              </Link>
            </li>
          </ul>
        </div>
        <a className="navbar-brand linkLoginPC" href="/">
          <Link to="/login" className="nav-link active">
            <b>Login</b>
          </Link>
        </a>
      </div>
    </nav>
  );
};
