import "./cartItem.styled";
import {
  CartItemContainer,
  Image,
  ItemsDetails,
  Name,
} from "./cartItem.styled";

const CartItem = ({ item }) => {
  const { name, qty, imageUrl, price } = item;

  return (
    <CartItemContainer>
      <Image as="img" src={imageUrl} alt={`${name}`} />
      <ItemsDetails>
        <Name as="span">{name}</Name>
        <span className="price">
          {qty} x ${price}
        </span>
      </ItemsDetails>
    </CartItemContainer>
  );
};

export default CartItem;
