import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    console.log('Añadido al carrito producto: ', product);
    const exists = cartItems.find((item) => item.id === product.id);

    if (exists) {
        if (exists.quantity >=9){
            console.warn()
        }
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === product.id && item.quantity < 9
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
