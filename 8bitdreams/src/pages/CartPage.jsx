import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Resumen de compra</h2>

      {cartItems.length === 0 && <p>Tu carrito está vacío.</p>}

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} width={80} />
          <div>
            <h3>{item.name}</h3>
            <p>Precio unitario: ${item.price.toFixed(2)}</p>
            <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
            <div>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
