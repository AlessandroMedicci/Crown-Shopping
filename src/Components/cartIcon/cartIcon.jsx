import "./cartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../Assets/shoppingBag.svg";
//import CartDropdown from "../cartDropdown/cartDropdown";
import { useContext } from "react";
import { CartDropdownContext } from "../../Context/cartItemContext";

const CartIcon = () => {
  const { isOpened, setIsOpened, cartCount } = useContext(CartDropdownContext);

  const cartToggle = () => setIsOpened(!isOpened);

  return (
    <div className="cart-icon-container" onClick={cartToggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
