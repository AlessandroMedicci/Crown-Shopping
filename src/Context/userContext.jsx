import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth,
  signOutUser,
} from "../Utils/firebase/firebase";
/*
 * Context contains two pieces, storage that holds a data in it and a provider.
 * UserContent tends to be an actual contextual value that is being accessed.
 */
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

/*
 * A provider is an actual component that provides an actual value and updates it too.
 * It then wraps up all the child components.
 */
export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  //signOutUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
