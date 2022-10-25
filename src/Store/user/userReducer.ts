import { AnyAction } from "redux";

import {
  signupFailed,
  signinFailed,
  signoutFailed,
  signinSucceeded,
  signoutSucceeded,
} from "./userAction";

import { UserData } from "../../Utils/firebase/firebase";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signinSucceeded.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  if (signoutSucceeded.match(action)) {
    return { ...state, currentUser: null };
  }

  if (
    signinFailed.match(action) ||
    signupFailed.match(action) ||
    signoutFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }

  return state;
};
