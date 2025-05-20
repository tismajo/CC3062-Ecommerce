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
    <div className="productDetails">
      <img src={product.image} alt={product.title + ' imagen'} />
      <h1>{product.title}</h1>
      <p>Año de publicación: {product.year}</p>
      <p>Plataformas: {product.platforms}</p>
      <p>Tipo de juego: {product.description}</p>
      <p>{product.synopsis}</p>
      <Link to={'/'}>
        <button>Regresar</button>
      </Link>
      <button onClick={() => addToCart(product)}>Añadir al carrito</button>
    </div>
  );
}
