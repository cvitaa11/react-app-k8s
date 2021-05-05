import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand>
        <NavLink className="navbar-link" to="/">
          Home
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <NavLink className="navbar-link" to="/about">
              About
            </NavLink>
          </Nav.Item>
          &nbsp;
          <Nav.Item>
            <NavLink className="navbar-link" to="/contact">
              Contact
            </NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
