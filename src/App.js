import { Routes, Route } from "react-router-dom";

import Navigation from "./Routes/navigation/navigation";

import Home from "./Routes/home/home";

const Shop = () => {
  return <div>Hello, I am your shopping assistant</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
