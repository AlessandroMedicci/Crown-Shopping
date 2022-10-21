import CartDropdown from "../../Components/cartDropdown/cartDropdown";
import createAction from "../../Utils/reducer/reducer";
import { USER_ACTION_TYPES } from "./userTypes";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

/*
  CHECK_USER_SESSION: 'user/CHECK_USER_SESSION',
  GOOGLE_SIGNIN_START: 'user/GOOGLE_SIGNIN_START',
  EMAIL_SIGNIN_START: 'user/EMAIL_SIGNIN_START',
  SIGNIN_SUCCEEDED: 'user/SIGNIN_SUCCEEDED',
  SIGNIN_FAILED: 'user/SIGNIN_FAILED',
*/

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSigninStart = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGNIN_START);

export const emailSigninStart = (email, password) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGNIN_START, { email, password });

export const signinSucceeded = (user) =>
  createAction(USER_ACTION_TYPES.SIGNIN_SUCCEEDED, user);

export const signinFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGNIN_FAILED, error);

export const signupStart = (email, password, displayName) =>
  createAction(USER_ACTION_TYPES.SIGNUP_START, {
    email,
    password,
    displayName,
  });

export const signupSucceeded = (user, additionalInformation) =>
  createAction(USER_ACTION_TYPES.SIGNUP_SUCCEEDED, {
    user,
    additionalInformation,
  });

export const signupFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGNUP_FAILED, error);
