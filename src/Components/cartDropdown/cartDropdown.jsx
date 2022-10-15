import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../Store/cart/cartSelect";
import Button from "../button/button";
import CartItem from "../cartItem/cartItem";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cartDropdown.styled";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
