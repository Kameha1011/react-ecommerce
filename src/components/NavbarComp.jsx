import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export const NavbarComp = () => {
  return (
    <Navbar collapseOnSelect variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Shop</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav navbarScroll className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Link to={'/shop'} className='nav-link'>Shop</Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
          </Nav>
          <Nav.Link>
            <FiShoppingCart />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
