import { useState } from "react";
import InputForm from "../inputForm/inputForm";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import {
  sighInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../Utils/firebase/firebase";
import { SignInContainer, ButtonsContainer } from "./signInForm.styled";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await sighInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("No user found with an email indicated");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Got an account?!</h2>
      <span>Get in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <InputForm
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <InputForm
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Get In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
