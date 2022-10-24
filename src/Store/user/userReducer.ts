import { AnyAction } from "redux";

import {
  signUpFailed,
  signInFailed,
  signOutFailed,
  signInSucceeded,
  signOutSucceeded,
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
  if (signInSucceeded.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  if (signOutSucceeded.match(action)) {
    return { ...state, currentUser: null };
  }

  if (
    signInFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }

  return state;
};
