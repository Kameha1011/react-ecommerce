import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
import { SideCart } from "./SideCart";
// TODO: separar el offcanvas a su propio componente

export const NavbarComp = ({transparent}) => {
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const getCategories = async () => {
      try {
        await axios
          .get("https://fakestoreapi.com/products/categories")
          .then((response) => {
            setCategories(response.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);
  return (
    <Navbar collapseOnSelect variant="light" expand="lg" className={`w-100 ${transparent && 'transparent'}`}>
      <Container>
        <Navbar.Brand href="#home">Store logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav navbarScroll>
            <Link to={"/"} className="nav-link">
              Home
            </Link>
            <NavDropdown title="Shop">
              {categories.map((category, i) => (
                <NavDropdown.Item key={i}>
                  <Link
                    to={`/shop/category/${category}`}
                    className="nav-link"
                  >{`${category.charAt(0).toUpperCase()}${category.slice(
                    1
                  )}`}</Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Link to={"/contact"} className="nav-link">
              Contact Us
            </Link>
          </Nav>
          <Nav.Link onClick={handleShow}>
            <FiShoppingCart />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>

        <SideCart show={show} handleClose={handleClose} />            
    </Navbar>
  );
};
