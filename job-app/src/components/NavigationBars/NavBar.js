import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar-dark navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <img src="./images/Logo.png" id="logo" alt="..."></img>
        </Link>
        <button
          className="btn btn-outline-secondary navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="nav-links">Services</span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/add-cv">
                    Find a Job
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/get-cv">
                    Employ
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#services">
                    About Our Services
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#About">
                <span className="nav-links">About us</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                <span className="nav-links">Contact us</span>
              </a>
            </li>
          </ul>
          <Link className="nav-login" to="/login">
            <span className="login">Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
