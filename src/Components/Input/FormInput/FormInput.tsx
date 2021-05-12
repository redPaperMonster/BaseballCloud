import * as React from "react";
import { InputWrapper, Input, Label } from "./FormInputStyle";
import { useState } from "react";
interface FormInputProps {
  placeholder: string;
  type: string;
}

export type FormInputStyleProps = {
  focused: boolean;
};
const FormInput: React.FC<FormInputProps> = ({ placeholder, type }) => {
  const [focused, setFocused] = useState(false);

  return (
    <InputWrapper>
      <Input
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        type={type}
      />
      <Label focused={focused}>{placeholder}</Label>
    </InputWrapper>
  );
};
export default FormInput;
