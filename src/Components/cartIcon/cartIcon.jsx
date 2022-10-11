import "./cartIcon.styled.jsx";
import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cartIcon.styled.jsx";
import { ReactComponent as ShoppingIconAct } from "../../Assets/shoppingBag.svg";
//import CartDropdown from "../cartDropdown/cartDropdown";
import { useContext } from "react";
import { CartDropdownContext } from "../../Context/cartItemContext";

const CartIcon = () => {
  const { isOpened, setIsOpened, cartCount } = useContext(CartDropdownContext);

  const cartToggle = () => setIsOpened(!isOpened);

  return (
    <CartIconContainer onClick={cartToggle}>
      <ShoppingIcon>
        <ShoppingIconAct />
      </ShoppingIcon>
      <ItemCount as="span">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
