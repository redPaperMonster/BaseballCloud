import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import {
  InputWrapper,
  IconWrapper,
  Input,
  InputContainer,
  ErrorText,
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
      <InputWrapper>
        <IconWrapper>
          <FontAwesomeIcon icon={icon} color="gray" />
        </IconWrapper>
        <Input placeholder={placeholder} type={type} {...input} />
      </InputWrapper>
      {meta.touched && (meta.error || meta.submitError) && (
        <ErrorText>{meta.error || meta.submitError}</ErrorText>
      )}
    </InputContainer>
  );
};
export default AuthInput;
