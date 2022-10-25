import { takeLatest, put, all, call } from "typed-redux-saga/macro";
import { User } from "firebase/auth";
import { USER_ACTION_TYPES } from "./userTypes";
import {
  signinSucceeded,
  signinFailed,
  signupFailed,
  signupSucceeded,
  signoutFailed,
  signoutSucceeded,
  EmailSigninStart,
  SignupStart,
  SignupSucceeded,
} from "./userAction";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  sighInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
  AdditionalInformation,
} from "../../Utils/firebase/firebase";

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalInformation?: AdditionalInformation
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInformation
    );

    if (userSnapshot) {
      yield* put(
        signinSucceeded({ id: userSnapshot.id, ...userSnapshot.data() })
      );
    }
  } catch (error) {
    yield* put(signinFailed(error as Error));
  }
}

export function* signinWithGoogle() {
  try {
    const { user } = yield* call(sighInWithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signinFailed(error as Error));
  }
}

export function* signinWithEmail({
  payload: { email, password },
}: EmailSigninStart) {
  try {
    const userCredential = yield* call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    if (userCredential) {
      const { user } = userCredential;
      yield* call(getSnapshotFromUserAuth, user);
    }
  } catch (error) {
    yield* put(signinFailed(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(signinFailed(error as Error));
  }
}

export function* signup({
  payload: { email, password, displayName },
}: SignupStart) {
  try {
    const data = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    if (data) {
      const { user } = data;
      yield* put(signupSucceeded(user, { displayName }));
    }
  } catch (error) {
    yield* put(signupFailed(error as Error));
  }
}

export function* signout() {
  try {
    yield* call(signOutUser);
    yield* put(signoutSucceeded());
  } catch (error) {
    yield* put(signoutFailed(error as Error));
  }
}

export function* signinAfterSignup({
  payload: { user, additionalInformation },
}: SignupSucceeded) {
  yield* call(getSnapshotFromUserAuth, user, additionalInformation);
}

export function* onGoogleSigninStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGNIN_START, signinWithGoogle);
}

export function* onEmailSigninStart() {
  yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGNIN_START, signinWithEmail);
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignupStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGNUP_START, signup);
}

export function* onSignupSucceeded() {
  yield* takeLatest(USER_ACTION_TYPES.SIGNIN_SUCCEEDED, signinAfterSignup);
}

export function* onSignoutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGNOUT_START, signout);
}

export function* userSaga() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSigninStart),
    call(onEmailSigninStart),
    call(onSignupStart),
    call(onSignupSucceeded),
    call(onSignoutStart),
  ]);
}
