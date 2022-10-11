import "./inputForm.styled.jsx";
import { FormInputLabel, Input, Group } from "./inputForm.styled.jsx";

const InputForm = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default InputForm;
