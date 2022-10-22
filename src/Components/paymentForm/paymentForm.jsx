import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from "./paymentForm.styled";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button from "../button/button";
import { BUTTON_TYPE_CLASSES } from "../button/button";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
