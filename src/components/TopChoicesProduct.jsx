function TopChoicesProduct({product}) {
  return (
    <article
      className={`col-12 col-md-5 col-lg-3 d-flex flex-column p-2 mb-3 TopChoicesProduct`}
    >
      <div>
        <a href="#">
          <img
            src={product.image}
            alt={product.title}
            className="TopChoicesImg"
          />
        </a>
      </div>
      <div className="p-3 d-flex flex-column justify-content-center TopChoicesProductText ">
          <h3>{product.title}</h3>
          <p className="text-muted">${product.price}</p>
          <a className="btn">SHOP NOW</a>
      </div>
    </article>
  );
}

export default TopChoicesProduct;
