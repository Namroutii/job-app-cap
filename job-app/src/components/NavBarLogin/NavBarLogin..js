import "./NavBarLogin.css"
import { Link } from "react-router-dom";
function NavBarLogin() {
    return (
        <nav className="navbar-dark navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home"><img src="./images/Logo.png" id="logo" alt="..."></img></Link>
                <button className="btn btn-outline-secondary navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home"><span className="nav-links">Home</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/get-cv"><span className="nav-links">Show Cvs</span></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact" ><span className="nav-links">Contact us</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default NavBarLogin;