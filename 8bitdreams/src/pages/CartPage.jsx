import { useContext, useMemo } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

import '../styles/Cart.css';

export default function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const totalSubtotal = useMemo(() => {
    return cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
  }, [cartItems]);

  return (
    <main className="cart-container">
      <h2 className="cart-title">Resumen de compra</h2>

      <div className="cart-content">
        <section className="cart-items">
          {cartItems.length === 0 && <p>Tu carrito está vacío.</p>}

          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.title + ' image'}
                className="item-image"
              />
              <div className="item-details">
                <p className="item-title">{item.title}</p>
                <p className="item-description">{item.description}</p>
                <div className="quantity-control">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  {totalSubtotal >= 999.99 && (
                    <p className="limit-warning">No puedes continuar, excediste el límite.</p>
                  )}

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    disabled={totalSubtotal >= 999.99}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        <aside className="cart-summary">
          <h3>Total</h3>
          <p>
            Subtotal de productos
            <br />Q{totalSubtotal.toFixed(2)}
          </p>
          <p>
            Descuentos aplicados
            <br />
            Q0.00
          </p>
          <p>
            <strong>TOTAL: Q{totalSubtotal.toFixed(2)}</strong>
          </p>

          <div className="cart-actions">
            <Link to="/">
              <button className="cancel-button">CANCELAR</button>
            </Link>
            <button className="buy-button">COMPRAR</button>
          </div>
        </aside>
      </div>
    </main>
  );
}
