export enum USER_ACTION_TYPES {
  SET_CURRENT_USER = "user/SET_CURRENT_USER",
  CHECK_USER_SESSION = "user/CHECK_USER_SESSION",
  GOOGLE_SIGNIN_START = "user/GOOGLE_SIGNIN_START",
  EMAIL_SIGNIN_START = "user/EMAIL_SIGNIN_START",
  SIGNIN_SUCCEEDED = "user/SIGNIN_SUCCEEDED",
  SIGNIN_FAILED = "user/SIGNIN_FAILED",

  SIGNUP_START = "user/SIGNUP_START0",
  SIGNUP_SUCCEEDED = "user/SIGNUP_SUCCEEDED",
  SIGNUP_FAILED = "user/SIGNUP_FAILED",

  SIGNOUT_START = "user/SIGNOUT_START0",
  SIGNOUT_SUCCEEDED = "user/SIGNOUT_SUCCEEDED",
  SIGNOUT_FAILED = "user/SIGNOUT_FAILED",
};
