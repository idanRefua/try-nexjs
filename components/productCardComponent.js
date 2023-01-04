function ProductCardComponent(product) {
  return (
    <div className="card" style={{ width: "17.13rem" }}>
      <img
        className="card-img-top"
        src={product.img}
        alt={product.title}
        style={{ height: "14em", width: "16.8rem" }}
      />
      <div className="card-body">
        <h3>{product.title}</h3>
        <p className="card-text">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductCardComponent;
