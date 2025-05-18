import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

function ProductCard({ id, title, description, price, image, platforms }) {
  return (
    <Link to={`/details/${id}`} className="card">
      <img src={image} alt={title + ' image'} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{platforms}</p>
      <p>Q{price.toFixed(2)}</p>
      <button>Agregar al carrito</button>
    </Link>
  );
}

export default ProductCard;
