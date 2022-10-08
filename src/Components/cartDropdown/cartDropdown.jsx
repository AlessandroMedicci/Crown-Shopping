import "./cartDropdown.scss";
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
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button onClick={navigateHandler}>Check Out</Button>
    </div>
  );
};

export default CartDropdown;
