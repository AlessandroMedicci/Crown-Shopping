import "./categoriesDirectory.scss";
import CategoryItem from "../categoryItem/categoryItem";

const CategoriesDirectory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesDirectory;
