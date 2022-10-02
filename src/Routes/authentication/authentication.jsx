//import { useEffect } from "react";
//import { getRedirectResult } from "firebase/auth";
//import { async } from "@firebase/util";
// import {
//   //auth,
//   sighInWithGooglePopup,
//   //signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
// } from "../../Utils/firebase/firebase";

import "./authentication.scss";
import SignUpForm from "../../Components/signUpForm/signUpForm";
import SignInForm from "../../Components/signInForm/signInForm";
const Authentication = () => {
  // useEffect(() => {
  //   async function fetchAuth() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }
  //   fetchAuth();
  // }, []);

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  );
};

export default Authentication;
