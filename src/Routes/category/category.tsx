import { CategoryContainer, Title } from "./category.styled";

import { useParams } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../Components/productCard/productCard";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../Store/categories/categorySelect";
import Spinner from "../../Components/spinner/spinner";

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
