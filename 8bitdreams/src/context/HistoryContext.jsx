import { createContext, useState } from 'react';

export const HistoryContext = createContext();

export function HistoryProvider({ children }) {
  const [history, setHistory] = useState([]);

  const addPurchase = (cartItems) => {
    const timestamp = new Date().toISOString();
    const newOrder = {
      id: crypto.randomUUID(),
      date: timestamp,
      items: cartItems,
    };

    setHistory((prev) => [...prev, newOrder]);
  };

  const getHistory = () => history;

  return (
    <HistoryContext.Provider value={{ history, addPurchase, getHistory }}>
      {children}
    </HistoryContext.Provider>
  );
}
