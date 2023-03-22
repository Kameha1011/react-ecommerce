import axios from "axios";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FiShoppingCart } from "react-icons/fi";

// const api_url = "https://fakestoreapi.com/products/categories"

export const NavbarApp = () => {
/*   const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const getCategories = async () => {
      try {
        await axios
          .get(api_url)
          .then((response) => {setCategories(response.data)});
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);
 */
  return (
    <Navbar collapseOnSelect variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Shop</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav navbarScroll className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tienda">Store</Nav.Link>
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
