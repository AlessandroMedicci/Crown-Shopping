import "./categoriesDirectory.styled.jsx";
import { DirectoryContainer } from "./categoriesDirectory.styled.jsx";
import DirectoryItem from "../directoryItem/directoryItem";

const CategoriesDirectory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default CategoriesDirectory;
