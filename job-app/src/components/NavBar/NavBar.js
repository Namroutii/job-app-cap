import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
  var services = window.location.href.includes("/home") ? "#services" : "/home";
  var about = window.location.href.includes("/home") ? "#about-us" : "/home";
  var contact = window.location.href.includes("/home")
    ? "#contact-us"
    : "/home";

  return (
    <div id="navb">
      <Navbar
        key="md"
        bg="dark"
        variant="dark"
        expand="md"
        className="mb-3"
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <Link to="/home">
              <img src="./images/logo.png" id="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="start"
            className="nav_canvas"
          >
            <Offcanvas.Header closeButton id="close-button"></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown
                  title="Services"
                  id="offcanvasNavbarDropdown-expand-md"
                  className="nav_content"
                >
                  <NavDropdown.Item className="drop_down">
                    <Link to="/add-cv">Add a New CV</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="drop_down">
                    <Link to="/get-cv">View Stored CVs</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />

                  <NavDropdown.Item className="drop_down" href={services}>
                    About Our Services
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="nav_content" href={about}>
                  About Us
                </Nav.Link>
                <Nav.Link className="nav_content" href={contact}>
                  Contact Us
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavBar;
