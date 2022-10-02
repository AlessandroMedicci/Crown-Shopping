import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXscU2bF5P7yd0tzfRsNDV72mMl5Pe_w8",
  authDomain: "crown-wardrobe.firebaseapp.com",
  projectId: "crown-wardrobe",
  storageBucket: "crown-wardrobe.appspot.com",
  messagingSenderId: "563896248230",
  appId: "1:563896248230:web:66300bd267f19955781167",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const sighInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("Error created on setDoc stage", error.message);
    }
    return userDocRef;
  }
};
