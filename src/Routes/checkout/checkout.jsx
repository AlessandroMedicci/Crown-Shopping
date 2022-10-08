import { useContext } from "react";
import { CartDropdownContext } from "../../Context/cartItemContext";
import "./checkout.scss";
import CheckoutItem from "../../Components/checkoutItem/checkoutItem";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartDropdownContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Prod</span>
        </div>

        <div className="header-block">
          <span>Descr</span>
        </div>

        <div className="header-block">
          <span>Qty</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <span className="total">${totalPrice}</span>
    </div>
  );
};

export default Checkout;
