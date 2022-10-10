import { Routes, Route } from "react-router-dom";
import "./shopping.scss";
import CollectionPreview from "../collectionPreview/collectionPreview";
import Category from "../category/category";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CollectionPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
