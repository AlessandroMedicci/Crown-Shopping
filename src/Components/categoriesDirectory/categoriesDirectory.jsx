import "./categoriesDirectory.scss";
import DirectoryItem from "../directoryItem/directoryItem";

const CategoriesDirectory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesDirectory;
