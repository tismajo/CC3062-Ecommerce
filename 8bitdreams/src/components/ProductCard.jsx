import '../styles/ProductCard.css';

function ProductCard({ title, description, price, image, platforms }) {
  return (
    <div className="card">
      <img src={image} alt={title} width={150} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{platforms}</p>
      <p>Q{price.toFixed(2)}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ProductCard;
