import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

function Header() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        await axios
          .get("https://fakestoreapi.com/products?limit=6")
          .then((response) => {
            setProducts(response.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  return (
    <header>
      <Carousel
        variant="dark"
        indicators={false}
        interval={null}
        className="w-100 h-100"
      >
        {products.map((product, i) => (
          <Carousel.Item className="h-100" key={i}>
            <img
              className="d-block w-100 h-100 object-fit-contain"
              src={product.image}
              alt={product.title}
            />
            <Carousel.Caption className="text-dark">
              <h5 className="text-uppercase text-warning mb-3">
                {product.category}
              </h5>
              <h2 className="lh-2 mb-3">{product.title}</h2>
              <p className="lead">{product.description}</p>
              <a href="#" className="btn btn-outline-dark">
                Ver productos
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </header>
  );
}

export default Header;
