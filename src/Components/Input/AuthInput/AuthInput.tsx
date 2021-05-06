import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import {
  InputWrapper,
  IconWrapper,
  Input,
  InputContainer,
} from "./AuthInputStyle";
import { FieldRenderProps } from "react-final-form";
interface AuthInputProps extends FieldRenderProps<string> {
  placeholder: string;
  icon: IconDefinition;
  type?: string;
}

const AuthInput: React.FC<AuthInputProps> = ({
  placeholder,
  icon,
  input,
  meta,
  type = "text",
}) => {
  return (
    <InputContainer>
      <IconWrapper>
        <FontAwesomeIcon icon={icon} color="gray" />
      </IconWrapper>
      <InputWrapper>
        <Input
          placeholder={placeholder}
          onChange={input.onChange}
          value={input.value}
          type={type}
        />
      </InputWrapper>
    </InputContainer>
  );
};
export default AuthInput;
