import * as React from "react";
import { InputWrapper, Input, Label, ErrorText } from "./FormInputStyle";
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
    <div>
      <InputWrapper>
        <Input
          {...input}
          onChange={(e) =>
            input.onChange(
              type === "number" ? +e.currentTarget.value : e.currentTarget.value
            )
          }
          value={type === "number" ? +input.value : input.value}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <Label focused={focused}>{placeholder}</Label>
      </InputWrapper>
      {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
    </div>
  );
};
export default FormInput;
