import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FlashMessage } from "./FlashMessage";
// TODO: arreglar q la descripcion no se vea taaan larga
// TODO: si se va a agregar un producto repetido al carrito ver si se le suma la cantidad al q ya estaba
function SingleProduct() {
  const [showFlash, setShowFlash] = useState(false);
  const [qty, setQty] = useState(1);
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
      product,
    };
    addProductToCart(cartItem);
    setShowFlash(true);
  };
  return (
    <section className="SingleProductContainer mb-5">
      <div className="row gx-0 px-2">
        <FlashMessage
          show={showFlash}
          turn={setShowFlash}
          productTitle={product.title}
          qty={qty}
        />
        <article className="d-flex gap-2 flex-wrap justify-content-center">
          <img
            src={product.image}
            alt={product.title}
            className="SingleProductImg"
          />

          <div className="p-2 p-md-5 ProductDescription">
            <h2>{product.title}</h2>
            <p className="price fs-1">{product.price}$</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim at
              minima corporis iure in veritatis esse necessitatibus iusto
              consequuntur nostrum iste aliquam quibusdam, ratione molestiae
              quod porro, consectetur delectus vero!
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                min="1"
                max="10"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                className="form-control w-25 d-inline mx-1"
              />
              <button className="btn w-50">Add to cart</button>
            </form>
          </div>
          <div className="w-100 mb-5 mt-5 text-center p-3 border-top border-dark text-dark">
            <h2>Description</h2>
            <p className="lead">{product.description}</p>
          </div>
        </article>
      </div>
    </section>

  );
}

export default SingleProduct;
