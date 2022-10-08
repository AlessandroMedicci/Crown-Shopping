import "./navigation.scss";
import { Fragment, useContext } from "react";
import { UserContext } from "../../Context/userContext";
import { CartDropdownContext } from "../../Context/cartItemContext";
import { ReactComponent as CrownLogo } from "../../Assets/crown.svg";
import { Outlet, Link } from "react-router-dom";
import { signOutUser } from "../../Utils/firebase/firebase";
import CartIcon from "../../Components/cartIcon/cartIcon";
import CartDropdown from "../../Components/cartDropdown/cartDropdown";

const Navigation = () => {
  const { isOpened } = useContext(CartDropdownContext);

  const { currentUser } = useContext(UserContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              GET OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              GET IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isOpened && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
