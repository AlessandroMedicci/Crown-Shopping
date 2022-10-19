import { Routes, Route } from "react-router-dom";
import "./shopping.scss";
import CollectionPreview from "../collectionPreview/collectionPreview";
import Category from "../category/category";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoriesThunk } from "../../Store/categories/categoryAction";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
  }, []);

  return (
    <Routes>
      <Route index element={<CollectionPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
