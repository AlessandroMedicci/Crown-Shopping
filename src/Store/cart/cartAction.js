import { CART_ACTION_TYPES } from "./cartTypes";
import createAction from "../../Utils/reducer/reducer";

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

export const setIsOpened = (boolean) =>
  createAction(CART_ACTION_TYPES.setIsOpened, boolean);

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
