import { createContext, useState, useEffect } from "react";

const itemsChecker = (cartItems, itemToAdd) => {
  const existingItems = cartItems.find((item) => item.id === itemToAdd.id);
  if (existingItems) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, qty: item.qty + 1 } : item
    );
  }
  return [...cartItems, { ...itemToAdd, qty: 1 }];
};

export const CartDropdownContext = createContext({
  isOpened: false,
  setIsOpened: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  cartCount: 0,
});

export const CartDropdownContextProvider = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.qty,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemsToCart = (itemToAdd) => {
    setCartItems(itemsChecker(cartItems, itemToAdd));
  };

  const value = { isOpened, setIsOpened, cartItems, addItemsToCart, cartCount };
  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
