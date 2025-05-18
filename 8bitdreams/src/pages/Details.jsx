import { useParams } from 'react-router-dom';
import products from '../data/products';

export default function Details() {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  if (!product) return <p>No se pudo encontrar el producto.</p>;

  return (
    <div className="productDetails">
      <img src={product.image} alt={product.title + ' imagen'} />
      <h1>{product.title}</h1>
      <p>{product.platforms}</p>
      <p>{product.description}</p>
      <p>{product.synopsis}</p>
    </div>
  );
}
