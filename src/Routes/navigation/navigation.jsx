import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styled.jsx";
import { Fragment, useContext } from "react";
//import { UserContext } from "../../Context/userContext";
import { CartDropdownContext } from "../../Context/cartItemContext";
import { ReactComponent as CrownLogo } from "../../Assets/crown.svg";
import { Outlet } from "react-router-dom";
import { signOutUser } from "../../Utils/firebase/firebase";
import CartIcon from "../../Components/cartIcon/cartIcon";
import CartDropdown from "../../Components/cartDropdown/cartDropdown";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../Store/user/userSelector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);

  const { isOpened } = useContext(CartDropdownContext);

  // const { currentUser } = useContext(UserContext);
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
        {isOpened && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
