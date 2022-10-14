import { createContext, useReducer } from "react";
import createAction from "../Utils/reducer/reducer";

const itemsChecker = (cartItems, itemToAdd) => {
  const existingItems = cartItems.find((item) => item.id === itemToAdd.id);
  if (existingItems) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const itemsRemover = (cartItems, itemToRemove) => {
  const existingItems = cartItems.find((item) => item.id === itemToRemove.id);
  if (existingItems.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }
  return cartItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
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

const CART_ACTION_TYPES = {
  setCartItems: "SET_CART_ITEMS",
  setIsOpened: "SET_IS_OPEN",
};

const INITIAL_STATE = {
  isOpened: false,
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.setCartItems:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.setIsOpened:
      return {
        ...state,
        isOpened: payload,
      };
    default:
      throw new Error(`Unhandled type of action ${type}`);
  }
};

export const CartDropdownContextProvider = ({ children }) => {
  //const [isOpened, setIsOpened] = useState(false);
  /*
  
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
  */

  const [{ isOpened, cartItems, cartCount, totalPrice }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const totalPriceCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.setCartItems, {
        cartItems: newCartItems,
        totalPrice: totalPriceCount,
        cartCount: newCartCount,
      })
    );
  };
  const addItemsToCart = (itemToAdd) => {
    const newCartItems = itemsChecker(cartItems, itemToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemsFromCart = (itemToRemove) => {
    const newCartItems = itemsRemover(cartItems, itemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemsFromCheckout = (itemToClear) => {
    const newCartItems = itemsClearance(cartItems, itemToClear);
    updateCartItemsReducer(newCartItems);
  };

  const setIsOpened = (boolean) => {
    dispatch(createAction(CART_ACTION_TYPES.setIsOpened, boolean));
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
