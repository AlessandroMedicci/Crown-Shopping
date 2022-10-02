//import { useEffect } from "react";
//import { getRedirectResult } from "firebase/auth";
//import { async } from "@firebase/util";
import {
  //auth,
  sighInWithGooglePopup,
  //signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../Utils/firebase/firebase";
import SignUpForm from "../../Components/signUpForm/signUpForm";
const SignIn = () => {
  // useEffect(() => {
  //   async function fetchAuth() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }
  //   fetchAuth();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await sighInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sigh In</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
