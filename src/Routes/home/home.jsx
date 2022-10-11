import { Outlet } from "react-router-dom";

import CategoriesDirectory from "../../Components/categoriesDirectory/categoriesDirectory";

const Home = () => {
  return (
    <div>
      <CategoriesDirectory />
      <Outlet />
    </div>
  );
};

export default Home;
