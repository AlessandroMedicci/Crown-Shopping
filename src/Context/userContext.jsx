import { createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth,
} from "../Utils/firebase/firebase";
import createAction from "../Utils/reducer/reducer.js";
/*
 * Context contains two pieces, storage that holds a data in it and a provider.
 * UserContent tends to be an actual contextual value that is being accessed.
 */
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//Reducer

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type: ${type} entered`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

/*
 * A provider is an actual component that provides an actual value and updates it too.
 * It then wraps up all the child components.
 */
export const UserContextProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = { currentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

/*
const userReducer = (state, action) => {
  return {
    currentUser: 
  }
}
*/
