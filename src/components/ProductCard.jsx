import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="col-12 col-md-5 col-lg-3 d-flex flex-column mb-3 ProductCard">
      <div>
        <Link to={`/shop/product/${product.id}`}>
          <img src={product.image} alt={product.title} className="ProductImg" />
        </Link>
      </div>
      <div className="p-3 d-flex flex-column ProductCardText ">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <Link to={`/shop/product/${product.id}`} className="btn mt-auto">
          SHOP NOW
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
