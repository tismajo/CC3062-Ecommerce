import { useContext } from 'react';
import { HistoryContext } from '../context/HistoryContext';
import '../styles/History.css';

export default function HistoryPage() {
  const { history } = useContext(HistoryContext);

  return (
    <main className="history-page">
      <h2>Historial de compras</h2>
      {history.length === 0 ? (
        <p>No hay compras registradas.</p>
      ) : (
        history.map((order) => (
          <div key={order.id} className="history-item">
            <p><strong>Fecha:</strong> {new Date(order.date).toLocaleString()}</p>
            <ul>
              {order.items.map((item) => (
                <li key={item.id}>
                  {item.title} x{item.quantity} — Q{(item.price * item.quantity).toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </main>
  );
}
