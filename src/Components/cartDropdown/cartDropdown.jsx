import "./cartDropdown.scss";
import Button from "../button/button";
import CartItem from "../cartItem/cartItem";
import { useContext } from "react";
import { CartDropdownContext } from "../../Context/cartItemContext";

const CartDropdown = () => {
  const { cartItems } = useContext(CartDropdownContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button>Check Out</Button>
    </div>
  );
};

export default CartDropdown;
