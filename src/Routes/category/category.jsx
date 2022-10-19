import "./category.scss";
import { useParams } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../Components/productCard/productCard";
import {
  selectCategoriesMap,
  selectIsCategoriesLoading,
} from "../../Store/categories/categorySelect";
import Spinner from "../../Components/spinner/spinner";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsCategoriesLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
