import { CART_ACTION_TYPES } from "./cartTypes";

export const CART_INITIAL_STATE = {
  isOpened: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.setCartItems:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.setIsOpened:
      return {
        ...state,
        isOpened: payload,
      };
    default:
      return state;
  }
};
