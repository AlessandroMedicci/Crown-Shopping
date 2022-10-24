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

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGNIN_START>;

export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGNIN_START,
  { email: string; password: string }
>;

export type SignInSucceeded = ActionWithPayload<
  USER_ACTION_TYPES.SIGNIN_SUCCEEDED,
  UserData
>;

export type SignInFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGNIN_FAILED,
  Error
>;

export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGNUP_START,
  { email: string }
>;

export type SignUpSucceeded = ActionWithPayload<
  USER_ACTION_TYPES.SIGNUP_SUCCEEDED,
  { user: User; additionalInformation: AdditionalInformation }
>;

export type SignUpFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGNUP_FAILED,
  Error
>;

export type SignOutStart = Action<USER_ACTION_TYPES.SIGNOUT_START>;

export type SignOutSucceeded = Action<USER_ACTION_TYPES.SIGNOUT_SUCCEEDED>;

export type SignOutFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGNOUT_FAILED,
  Error
>;

export const checkUserSession = withMatcher(
  (): CheckUserSession => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
);

export const googleSignInStart = withMatcher(
  (): GoogleSignInStart => createAction(USER_ACTION_TYPES.GOOGLE_SIGNIN_START)
);

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGNIN_START, { email, password })
);

export const signInSucceeded = withMatcher(
  (user: UserData): SignInSucceeded =>
    createAction(USER_ACTION_TYPES.SIGNIN_SUCCEEDED, user)
);

export const signInFailed = withMatcher(
  (error: Error): SignInFailed =>
    createAction(USER_ACTION_TYPES.SIGNIN_FAILED, error)
);

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    createAction(USER_ACTION_TYPES.SIGNUP_START, {
      email,
      password,
      displayName,
    })
);

export const signUpSucceeded = withMatcher(
  (user: User, additionalInformation: AdditionalInformation): SignUpSucceeded =>
    createAction(USER_ACTION_TYPES.SIGNUP_SUCCEEDED, {
      user,
      additionalInformation,
    })
);

export const signUpFailed = withMatcher(
  (error: Error): SignUpFailed =>
    createAction(USER_ACTION_TYPES.SIGNUP_FAILED, error)
);

export const signOutStart = withMatcher(
  (): SignOutStart => createAction(USER_ACTION_TYPES.SIGNOUT_START)
);

export const signOutSucceeded = withMatcher(
  (): SignOutSucceeded => createAction(USER_ACTION_TYPES.SIGNOUT_SUCCEEDED)
);

export const signOutFailed = withMatcher(
  (error: Error): SignOutFailed =>
    createAction(USER_ACTION_TYPES.SIGNOUT_FAILED, error)
);
