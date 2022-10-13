import { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../Components/categoryPreview/categoryPreview";
import { selectCategoriesMap } from "../../Store/categories/categorySelect";

const CollectionPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </Fragment>
  );
};

export default CollectionPreview;
