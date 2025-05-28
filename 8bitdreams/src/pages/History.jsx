import { useContext } from 'react';
import { HistoryContext } from '../context/HistoryContext';
import '../styles/History.css';
import '../styles/Cart.css'; // 👈 Importamos los estilos del carrito

export default function HistoryPage() {
  const { history } = useContext(HistoryContext);

  return (
    <main>
      <h2 className="history-title">Historial de compras</h2>

      {history.length === 0 ? (
        <p>No hay compras registradas.</p>
      ) : (
        history.map((order) => (
          <div key={order.id}>
            <p className="purchase-title">
              Fecha: {new Date(order.date).toLocaleString()}
            </p>

            {order.items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="item-image" />
                <div className="item-details">
                  <p className="item-title">{item.title}</p>
                  <p className="item-description">{item.description}</p>
                  <p className="item-quantity">Cantidad: {item.quantity}</p>
                  <p className="item-price">
                    Total: Q{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </main>
  );
}
