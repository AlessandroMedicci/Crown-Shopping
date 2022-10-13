import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navigation from "./Routes/navigation/navigation";
import Authentication from "./Routes/authentication/authentication";
import Home from "./Routes/home/home";
import Shop from "./Routes/shopping/shopping";
import Checkout from "./Routes/checkout/checkout";

import { useEffect } from "react";
import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth,
} from "./Utils/firebase/firebase";

import { setCurrentUser } from "./Store/user/userAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
