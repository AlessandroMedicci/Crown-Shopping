import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styled.jsx";
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from "../../Assets/crown.svg";
import { Outlet } from "react-router-dom";
import { signOutUser } from "../../Utils/firebase/firebase";
import CartIcon from "../../Components/cartIcon/cartIcon";
import CartDropdown from "../../Components/cartDropdown/cartDropdown";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../Store/user/userSelector";
import { selectIsCartOpen } from "../../Store/cart/cartSelect.js";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
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
