import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useContext, useState } from 'react';

import products from '../data/products';
import '../styles/Details.css';

export default function Details() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((product) => product.id === parseInt(id));
  
  const discountedPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;
  const [likes, setLikes] = useState(() => {
    const storedLikes = localStorage.getItem(`likes-${product.id}`);
    return storedLikes ? parseInt(storedLikes, 10) : product.likes || 0;
  });

    const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`likes-${product.id}`, newLikes);
  };

  if (!product) return <p>No se pudo encontrar el producto.</p>;

  return (
    <div className="productDetails-container">
      <div className="productDetails-left">
        <img src={product.image} alt={product.title + ' imagen'} />
        <p className="product-price">Precio Q.{discountedPrice.toFixed(2)}</p>
        <button onClick={() => addToCart(product)} className="add-button">
          Añadir al carrito
        </button>

        <div className="like-container">
          <button onClick={handleLike} className="like-button">❤️ {likes} Likes</button>
        </div>
      </div>

      <div className="productDetails-right">
        <h1 className="product-title">{product.title}</h1>
        <p><strong>Fecha de lanzamiento:</strong> {product.year}</p>
        <p><strong>Género:</strong> {product.platforms}</p>
        <p className="product-description">{product.description}</p>
        <p>{product.synopsis}</p>

        <Link to="/" className="back-link">
          <button className="back-button">Regresar</button>
        </Link>
      </div>
    </div>
  );
}
