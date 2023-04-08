import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useLoaderData } from "react-router-dom";
function ProductsContainer() {
  const data = useLoaderData();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
  }, [data]);
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    (!title) ?? setProducts(data);
    const filteredProducts = data.filter(
      (product) => product.title.toLowerCase().includes(title.toLowerCase()) 
    );
    setProducts(filteredProducts);
    setTitle('');
  };

  return (
    <section>
      <form className="d-flex mx-auto mt-5 w-50" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search Products by name..."
          className="me-2 form-control"
          name="search"
          onChange={e => setTitle(e.target.value)}
          value={title}
          id="search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success">Search</button>
      </form>
      <section className="container-fluid d-flex flex-wrap gap-5 justify-content-center pt-5 w-75">
        {products.map((product, i) => (
          <ProductCard product={product} key={i} />
        ))}
      </section>
    </section>
  );
}

export default ProductsContainer;
