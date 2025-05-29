import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

function ProductCard({ id, title, description, price, image, platforms, discount }) {
  const discountedPrice = discount
  ? price - (price * discount) / 100
  : price;

  return (
    <div className="card">
      <img src={image} alt={title + ' image'} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{platforms}</p>
      {discount ? (
        <div className="price-container">
          <p className="original-price">Q{price.toFixed(2)}</p>
          <p className="discounted-price">Q{discountedPrice.toFixed(2)}</p>
        </div>
      ) : (
        <p className="discounted-price">Q{price.toFixed(2)}</p>
      )}
      <Link to={`/details/${id}`}>
        <button>Ver detalles</button>
      </Link>
    </div>
  );
}

export default ProductCard;
