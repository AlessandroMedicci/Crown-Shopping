import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../Context/categoriesContext";
import CategoryPreview from "../../Components/categoryPreview/categoryPreview";

const CollectionPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
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
