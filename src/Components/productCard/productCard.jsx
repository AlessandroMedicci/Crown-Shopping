import "./productCard.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";

import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../Store/cart/cartAction";
import { selectCartItems } from "../../Store/cart/cartSelect";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductCard;
