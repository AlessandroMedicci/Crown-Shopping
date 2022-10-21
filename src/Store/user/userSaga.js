import { takeLatest, put, all, call } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./userTypes";
import {
  signinSucceeded,
  signinFailed,
  signupFailed,
  signupSucceeded,
} from "./userAction";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  sighInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
} from "../../Utils/firebase/firebase";

export function* getSnapshotFromUserAuth(userAuth, additionalInformation) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInformation
    );
    yield put(signinSucceeded({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signinFailed(error));
  }
}

export function* signinWithGoogle() {
  try {
    const { user } = yield call(sighInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signinFailed(error));
  }
}

export function* signinWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signinFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signinFailed(error));
  }
}

export function* signup({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield put(signupSucceeded(user, { displayName }));
  } catch (error) {
    yield put(signupFailed(error));
  }
}

export function* signinAfterSignup({
  payload: { user, additionalInformation },
}) {
  yield call(getSnapshotFromUserAuth, user, additionalInformation);
}

export function* onGoogleSigninStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGNIN_START, signinWithGoogle);
}

export function* onEmailSigninStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGNIN_START, signinWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignupStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGNUP_START, signup);
}

export function* onSignupSucceeded() {
  yield takeLatest(USER_ACTION_TYPES.SIGNIN_SUCCEEDED, signinAfterSignup);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSigninStart),
    call(onEmailSigninStart),
    call(onSignupStart),
    call(onSignupSucceeded),
  ]);
}
