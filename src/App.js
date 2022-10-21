import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navigation from "./Routes/navigation/navigation";
import Authentication from "./Routes/authentication/authentication";
import Home from "./Routes/home/home";
import Shop from "./Routes/shopping/shopping";
import Checkout from "./Routes/checkout/checkout";

import { useEffect } from "react";
import { checkUserSession } from "./Store/user/userAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
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
