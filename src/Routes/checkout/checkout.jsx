import { useSelector } from "react-redux";

import { selectCartItems, selectCartTotal } from "../../Store/cart/cartSelect";

import CheckoutItem from "../../Components/checkoutItem/checkoutItem";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styled";

import PaymentForm from "../../Components/paymentForm/paymentForm.jsx";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Prod</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Descr</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Qty</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>

      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
