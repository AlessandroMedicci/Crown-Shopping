import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styled.jsx";
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from "../../Assets/crown.svg";
import { Outlet } from "react-router-dom";
import CartIcon from "../../Components/cartIcon/cartIcon";
import CartDropdown from "../../Components/cartDropdown/cartDropdown";
import { useSelector, useDispatch } from "react-redux";
import { selectIsCartOpen } from "../../Store/cart/cartSelect";
import { signoutStart } from "../../Store/user/userAction.js";
import { selectCurrentUser } from "../../Store/user/userSelector";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signoutUser = () => dispatch(signoutStart());

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signoutUser}>
              GET OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">GET IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
