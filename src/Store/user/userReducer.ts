import { USER_ACTION_TYPES } from "./userTypes";

export const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SIGNIN_SUCCEEDED:
      return { ...state, currentUser: payload };
    case USER_ACTION_TYPES.SIGNOUT_SUCCEEDED:
      return { ...state, currentUser: null };
    case USER_ACTION_TYPES.SIGNOUT_FAILED:
    case USER_ACTION_TYPES.SIGNIN_FAILED:
    case USER_ACTION_TYPES.SIGNUP_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};
