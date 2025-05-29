import { useContext, useMemo } from 'react';
import { CartContext } from '../context/CartContext';
import { HistoryContext } from '../context/HistoryContext';
import { Link } from 'react-router-dom';

import '../styles/Cart.css';

export default function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, clearCart } =
    useContext(CartContext);

  const totalSubtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      const discountedPrice = item.discount
        ? item.price - (item.price * item.discount) / 100
        : item.price;
      return acc + discountedPrice * item.quantity;
    }, 0);
  }, [cartItems]);

  const totalDescuento = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      if (item.discount) {
        const discountAmount = (item.price * item.discount) / 100;
        return acc + discountAmount * item.quantity;
      }
      return acc;
    }, 0);
  }, [cartItems]);

  const totalCantidad = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const limiteCantidadExcedido = totalCantidad > 9;


  const { addPurchase } = useContext(HistoryContext);

  const handleBuy = () => {
    if (cartItems.length === 0) return;
    addPurchase(cartItems);
    clearCart();
    alert('¡Compra registrada!');
  };

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
                    <p className="limit-warning">
                      Se sobrepasa el límite de Q999.99
                    </p>
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
            <br />Q{(totalSubtotal + totalDescuento).toFixed(2)}
          </p>
          <p>
            Descuentos aplicados
            <br />-Q{totalDescuento.toFixed(2)}
          </p>
          <p>
            <strong>TOTAL: Q{totalSubtotal.toFixed(2)}</strong>
          </p>

          {limiteCantidadExcedido && (
            <p className="limit-warning">
              No puedes comprar más de 9 productos por política de la tienda.
            </p>
          )}

          <div className="cart-actions">
            <Link to="/">
              <button className="cancel-button" onClick={clearCart}>
                CANCELAR
              </button>
            </Link>
            <button
              className="buy-button"
              onClick={handleBuy}
              disabled={limiteCantidadExcedido}
            >
              COMPRAR
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
}
