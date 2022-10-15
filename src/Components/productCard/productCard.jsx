import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../Store/cart/cartAction";
import { selectCartItems } from "../../Store/cart/cartSelect";
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./productCard.styled";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
