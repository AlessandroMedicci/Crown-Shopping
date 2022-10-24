import {
  CartItemContainer,
  Image,
  ItemsDetails,
  Name,
} from "./cartItem.styled";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <Image as="img" src={imageUrl} alt={`${name}`} />
      <ItemsDetails>
        <Name as="span">{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemsDetails>
    </CartItemContainer>
  );
};

export default CartItem;
