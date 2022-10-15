import SignUpForm from "../../Components/signUpForm/signUpForm";
import SignInForm from "../../Components/signInForm/signInForm";
import { AuthenticationContainer } from "./authentication.styled";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
