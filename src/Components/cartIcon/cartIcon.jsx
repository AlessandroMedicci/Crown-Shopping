import "./cartIcon.styled.jsx";
import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cartIcon.styled.jsx";
import { ReactComponent as ShoppingIconAct } from "../../Assets/shoppingBag.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../Store/cart/cartSelect.js";
import { setIsCartOpen } from "../../Store/cart/cartAction.js";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartToggle = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={cartToggle}>
      <ShoppingIcon>
        <ShoppingIconAct />
      </ShoppingIcon>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
