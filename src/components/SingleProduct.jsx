import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import {FlashMessage} from './FlashMessage';
// TODO: arreglar q la descripcion no se vea taaan larga 
function SingleProduct() {
  const [showFlash, setShowFlash] = useState(false);
  const [qty, setQty] = useState(0);
  const data = useLoaderData();
  const [product, setProduct] = useState({});
  useEffect(() => {
    setProduct(data);
  }, []);

  const { addProductToCart, cart } = useContext(CartContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const cartItem = {
      qty,
      product
    }
    console.log(cartItem)
    console.log(cart)
    addProductToCart(cartItem)
    console.log(cart)
    setShowFlash(true)
  };
  return (
    <section className="SingleProductContainer px-4">
      <FlashMessage show={showFlash} turn={setShowFlash} productTitle={product.title} qty={qty}/>
      <article className="d-flex gap-2 flex-wrap justify-content-center">
        <img
          src={product.image}
          alt={product.title}
          className="SingleProductImg"
        />

        <div className="p-2 p-md-5">
          <h2>{product.title}</h2>
          <p className="text-secondary">{product.price}$</p>
          <p className="lead">{product.description}</p>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              min="1"
              max="10"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className="form-control w-25 d-inline mx-1"
            />
            <button className="btn w-50">
              Add to cart
            </button>
          </form>
        </div>
      </article>
    </section>
  );
}

export default SingleProduct;
