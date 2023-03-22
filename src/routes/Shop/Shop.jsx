import { useEffect, useState } from "react";
import axios from "axios";
import { NavbarComp } from "../../components/NavbarComp";
import ProductCard from "../../components/ProductCard";

function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        await axios
          .get("https://fakestoreapi.com/products")
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
    <>
    {console.log(products)}
      <NavbarComp />
      <main className="min-vh-100">
        <section className="container-fluid d-flex flex-wrap gap-5 justify-content-center pt-5">
          {products.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </section>
      </main>
    </>
  );
}

export default Shop;
