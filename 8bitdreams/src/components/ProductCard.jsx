import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

function ProductCard({ id, title, description, price, image, platforms }) {
  return (
    <div className="card">
      <img src={image} alt={title + ' image'} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{platforms}</p>
      <p>Q{price.toFixed(2)}</p>
      <Link to={`/details/${id}`}>
        <button>Ver detalles</button>
      </Link>
    </div>
  );
}

export default ProductCard;
