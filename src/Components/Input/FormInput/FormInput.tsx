import * as React from "react";
import { InputWrapper, Input, Label } from "./FormInputStyle";
import { useState } from "react";
import { FieldInputProps, FieldMetaState } from "react-final-form";
interface FormInputProps {
  placeholder: string;
  type?: string;
  meta: FieldMetaState<string>;
  input: FieldInputProps<string, HTMLElement>;
}

export type FormInputStyleProps = {
  focused: boolean;
};
const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  type = "text",
  meta,
  input,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <InputWrapper>
      <Input
        {...input}
        onChange={(e) =>
          input.onChange(
            type === "number" ? +e.currentTarget.value : e.currentTarget.value
          )
        }
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
