import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useLoaderData } from "react-router-dom";
function ProductsContainer() {
  const data = useLoaderData();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
  }, [data]);
  return (
    <section className="container-fluid d-flex flex-wrap gap-5 justify-content-center pt-5 w-75">
      {products.map((product, i) => (
        <ProductCard product={product} key={i} />
      ))}
    </section>
  );
}

export default ProductsContainer;
