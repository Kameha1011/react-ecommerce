import React, { useEffect, useState } from "react";
import slide1 from "../assets/carousel/slide1.jpg";
import { useLoaderData } from "react-router-dom";

function SingleProduct() {
  const data = useLoaderData();
  const [product, setProduct] = useState({});
  useEffect(()=>{
    setProduct(data);
  }, [])
  return (
    <section className="mt-1 SingleProductContainer" >
      <article className="d-flex gap-2 flex-wrap justify-content-center">
        <img
          src={product.image}
          alt={product.title}
          className="SingleProductImg"
        />

        <div className="p-2 p-md-5" >
          <h2>{product.title}</h2>
          <p className="text-secondary">{product.price}</p>
          <small>{product.rating.count} Reviews</small>
          <p className="lead">
            {product.description}
          </p>
          <input type="number" min='0' max='10' className="form-control w-25 d-inline mx-1" />
          <button className="btn w-50">Add to cart</button>
        </div>
      </article>
    </section>
  );
}

export default SingleProduct;
