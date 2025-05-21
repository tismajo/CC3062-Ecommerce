import products from '../../data/products';
import ProductCard from '../../components/ProductCard';
import '../../styles/ProductList.css';

function ProductList() {
  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ProductList;
