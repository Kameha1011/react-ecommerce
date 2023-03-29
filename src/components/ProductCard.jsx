function ProductCard({ product }) {

  const handleClick = () => {
      console.log('epale sans', product.title);
  }

  return (
    <article className="col-12 col-md-5 col-lg-3 d-flex flex-column p-2 mb-3 ProductCard">
      <div onClick={handleClick}>
        <a href={`/shop/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="TopChoicesImg"
          />
        </a>
      </div>
      <div className="p-3 d-flex flex-column ProductCardText ">
        <h3>
          {product.title}{" "}
          <span className="badge bg-dark fs-6">{`${product.category
            .charAt(0)
            .toUpperCase()}${product.category.slice(1)}`}</span>
        </h3>
        <p className="text-muted">${product.price}</p>
        <a className="btn" href={`/shop/product/${product.id}`}>SHOP NOW</a>
      </div>
    </article>
  );
}

export default ProductCard;
