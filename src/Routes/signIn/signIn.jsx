import {
  sighInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../Utils/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await sighInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sigh In</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
