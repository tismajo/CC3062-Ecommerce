import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    console.log('Añadido al carrito producto: ', product);
    const exists = cartItems.find((item) => item.id === product.id);

    if (exists) {
      if (exists.quantity >= 9) {
        console.warn();
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

  function increaseQuantity(id) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity < 9
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  }

  function decreaseQuantity(id) {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
