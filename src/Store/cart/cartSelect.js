import { createSelector } from "reselect";

const updateCartItemsReducer = (newCartItems) => {
  const newCartCount = newCartItems.reduce(
    (total, cartItem) => total + cartItem.qty,
    0
  );

  const totalPriceCount = newCartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.qty,
    0
  );