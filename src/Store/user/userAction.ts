import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../Utils/reducer/reducer";
import { USER_ACTION_TYPES } from "./userTypes";
import { UserData, AdditionalInformation } from "../../Utils/firebase/firebase";
import { User } from "firebase/auth";

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export type GoogleSigninStart = Action<USER_ACTION_TYPES.GOOGLE_SIGNIN_START>;

export type EmailSigninStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGNIN_START,
  { email: string; password: string }
>;

export type SigninSucceeded = ActionWithPayload<
  USER_ACTION_TYPES.SIGNIN_SUCCEEDED,
  UserData
>;

export type SigninFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGNIN_FAILED,
  Error
>;

export type SignupStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGNUP_START,
  { email: string }
>;

export type SignupSucceeded = ActionWithPayload<
  USER_ACTION_TYPES.SIGNUP_SUCCEEDED,
  { user: User; additionalInformation: AdditionalInformation }
>;

export type SignupFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGNUP_FAILED,
  Error
>;

export type SignoutStart = Action<USER_ACTION_TYPES.SIGNOUT_START>;

export type SignoutSucceeded = Action<USER_ACTION_TYPES.SIGNOUT_SUCCEEDED>;

export type SignoutFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGNOUT_FAILED,
  Error
>;

export const checkUserSession = withMatcher(
  (): CheckUserSession => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
);

export const googleSigninStart = withMatcher(
  (): GoogleSigninStart => createAction(USER_ACTION_TYPES.GOOGLE_SIGNIN_START)
);

export const emailSigninStart = withMatcher(
  (email: string, password: string): EmailSigninStart =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGNIN_START, { email, password })
);

export const signinSucceeded = withMatcher(
  (user: UserData): SigninSucceeded =>
    createAction(USER_ACTION_TYPES.SIGNIN_SUCCEEDED, user)
);

export const signinFailed = withMatcher(
  (error: Error): SigninFailed =>
    createAction(USER_ACTION_TYPES.SIGNIN_FAILED, error)
);

export const signupStart = withMatcher(
  (email: string, password: string, displayName: string): SignupStart =>
    createAction(USER_ACTION_TYPES.SIGNUP_START, {
      email,
      password,
      displayName,
    })
);

export const signupSucceeded = withMatcher(
  (user: User, additionalInformation: AdditionalInformation): SignupSucceeded =>
    createAction(USER_ACTION_TYPES.SIGNUP_SUCCEEDED, {
      user,
      additionalInformation,
    })
);

export const signupFailed = withMatcher(
  (error: Error): SignupFailed =>
    createAction(USER_ACTION_TYPES.SIGNUP_FAILED, error)
);

export const signoutStart = withMatcher(
  (): SignoutStart => createAction(USER_ACTION_TYPES.SIGNOUT_START)
);

export const signoutSucceeded = withMatcher(
  (): SignoutSucceeded => createAction(USER_ACTION_TYPES.SIGNOUT_SUCCEEDED)
);

export const signoutFailed = withMatcher(
  (error: Error): SignoutFailed =>
    createAction(USER_ACTION_TYPES.SIGNOUT_FAILED, error)
);
