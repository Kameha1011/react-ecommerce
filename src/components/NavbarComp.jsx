import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FiShoppingCart } from "react-icons/fi";
import { Link, Form } from "react-router-dom";
import axios from "axios";



export const NavbarComp = () => {
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
    <Navbar collapseOnSelect variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Store logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav navbarScroll className="mx-auto">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
            <NavDropdown title='Shop'>
              {categories.map((category, i) => 
                  <NavDropdown.Item key={i}>
                    <Link to={`/shop/category/${category}`} className='nav-link'>{`${category.charAt(0).toUpperCase()}${category.slice(1)}`}</Link>
                  </NavDropdown.Item>
              )}
            </NavDropdown>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
          </Nav>
          <Nav.Link onClick={handleShow}>
            <FiShoppingCart />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>

      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="mb-0">There are no items on your cart brah.</p>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};
