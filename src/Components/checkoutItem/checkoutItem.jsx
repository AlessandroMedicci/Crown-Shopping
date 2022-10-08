import "./checkoutItem.scss";
import { useContext } from "react";
import { CartDropdownContext } from "../../Context/cartItemContext";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, qty } = cartItem;
  const { clearItemsFromCheckout, addItemsToCart, removeItemsFromCart } =
    useContext(CartDropdownContext);
  const clearanceHandler = () => clearItemsFromCheckout(cartItem);

  const incrementHandler = () => addItemsToCart(cartItem);
  const decrementHandler = () => removeItemsFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementHandler}>
          &#10094;
        </div>
        <span className="value">{qty}</span>
        <div className="arrow" onClick={incrementHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearanceHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
