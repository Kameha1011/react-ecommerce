import axios from "axios";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FiShoppingCart } from "react-icons/fi";
import "../App.css";

export const NavbarApp = () => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    console.log("ejele");
    const getCategories = async () => {
      try {
        await axios
          .get("https://fakestoreapi.com/products/categories")
          .then((response) => {setCategories(response.data)});
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  return (
    <Navbar collapseOnSelect variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Shop</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav navbarScroll className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Store" id="basic-nav-dropdown">
              {categories.map((category, i) => (
                <NavDropdown.Item href="#" key={i}>
                  {category[0].toUpperCase() + category.substring(1)}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <Nav.Link>
            <FiShoppingCart />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
