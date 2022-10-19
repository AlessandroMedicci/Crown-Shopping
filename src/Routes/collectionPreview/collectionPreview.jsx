import { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../Components/categoryPreview/categoryPreview";
import {
  selectCategoriesMap,
  selectIsCategoriesLoading,
} from "../../Store/categories/categorySelect";
import Spinner from "../../Components/spinner/spinner";

const CollectionPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsCategoriesLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((key) => {
          const products = categoriesMap[key];
          return <CategoryPreview key={key} title={key} products={products} />;
        })
      )}
    </Fragment>
  );
};

export default CollectionPreview;
