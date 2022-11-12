import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../photos/logo.png";
import Styles from "./NavB.module.css";
import "./NavB.css";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function nav() {
  return (
    <BrowserRouter>
      <Navbar
        key={"md"}
        bg="dark"
        variant="dark"
        expand={"md"}
        className="mb-3"
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo} id="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"md"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
            placement="end"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown
                  title="Services"
                  id={`offcanvasNavbarDropdown-expand-${"md"}`}
                  className={Styles.nav_content}
                >
                  <NavDropdown.Item href="#test">Add a New CV</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    View Stored CVs
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    About Our Services
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action1" className={Styles.nav_content}>
                  About Us
                </Nav.Link>
                <Nav.Link href="#action2" className={Styles.nav_content}>
                  Contact Us
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </BrowserRouter>
  );
}
export default nav;
