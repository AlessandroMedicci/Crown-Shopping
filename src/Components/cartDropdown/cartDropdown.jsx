import "./cartDropdown.styled.jsx";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cartDropdown.styled.jsx";
import Button from "../button/button";
import CartItem from "../cartItem/cartItem";
import { useContext } from "react";
import { CartDropdownContext } from "../../Context/cartItemContext";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartDropdownContext);
  const navigate = useNavigate();
  const navigateHandler = () => navigate("/checkout");
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={navigateHandler}>Check Out</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
