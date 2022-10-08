import { useContext } from "react";
import { ProductContext } from "../../Context/productContext";
import ProductCard from "../../Components/productCard/productCard";
import "./shopping.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
