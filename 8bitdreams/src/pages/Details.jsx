import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

import products from '../data/products';
import '../styles/Details.css';
import { useContext } from 'react';

export default function Details() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((product) => product.id === parseInt(id));
  if (!product) return <p>No se pudo encontrar el producto.</p>;

  return (
    <div className="productDetails-container">
        <div className="productDetails-left">
          <img src={product.image} alt={product.title + ' imagen'} />
          <p className="product-price">Precio (Q): Q{product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product)} className="add-button">
            Añadir al carrito
          </button>
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
