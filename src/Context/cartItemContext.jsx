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

const itemsRemover = (cartItems, itemToRemove) => {
  const existingItems = cartItems.find((item) => item.id === itemToRemove.id);
  if (existingItems.qty === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }
  return cartItems.map((item) =>
    item.id === itemToRemove.id ? { ...item, qty: item.qty - 1 } : item
  );
};

const itemsClearance = (cartItems, itemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);

export const CartDropdownContext = createContext({
  isOpened: false,
  setIsOpened: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  removeItemsFromCart: () => {},
  clearItemsFromCheckout: () => {},
  cartCount: 0,
  totalPrice: 0,
});

export const CartDropdownContextProvider = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.qty,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const totalPriceCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.qty,
      0
    );
    setTotalPrice(totalPriceCount);
  }, [cartItems]);

  const addItemsToCart = (itemToAdd) => {
    setCartItems(itemsChecker(cartItems, itemToAdd));
  };

  const removeItemsFromCart = (itemToRemove) => {
    setCartItems(itemsRemover(cartItems, itemToRemove));
  };

  const clearItemsFromCheckout = (itemToClear) => {
    setCartItems(itemsClearance(cartItems, itemToClear));
  };

  const value = {
    isOpened,
    setIsOpened,
    cartItems,
    addItemsToCart,
    cartCount,
    removeItemsFromCart,
    clearItemsFromCheckout,
    totalPrice,
  };
  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
