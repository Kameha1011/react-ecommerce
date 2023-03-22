import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function TopChoices() {
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
    <section className="container-fluid overflow-hidden px-0">
      <div className="row gap-5 mt-3 px-2 justify-content-center">
        <article className="col-12 col-lg-10 mb-5 text-center TopChoicesHeading">
          <p className="fw-bold mb-1">TOP CHOICES</p>
          <h3>Popular this week</h3>
          <p className="lead text-muted">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
            dolor quisquam beatae nostrum cum magnam.
          </p>
        </article>
        {products.map((product, i) => (
          <ProductCard product={product} key={i} />
        ))}
      </div>
    </section>
  );
}

export default TopChoices;
