import styled from "styled-components";
import { colors } from "../../../Utils/colors";
import { FormInputStyleProps } from "./FormInput";

export const InputWrapper = styled.div`
  display: flex;
  padding-right: 10px;
`;

export const Label = styled.label<FormInputStyleProps>`
  position: absolute;
  cursor: pointer;
  max-width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform-origin: left bottom;
  ${(props) =>
    props.focused
      ? ""
      : "transform: translate(17px, 15px) scale(1.15); visibility: hidden;"}
  transition: all 0.2s;
  touch-action: manipulation;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 1;
  font-weight: 400;
  color: ${colors.secondaryText};
  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  border-radius: 4px;
  background-color: ${colors.lightGray};
  height: 40px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  color: ${colors.darkGray};
  border: 1px solid transparent;
  &:focus {
    outline: none;
    border-radius: 4px;
    border: 1px solid ${colors.lightBlue};
  background-color: ${colors.white};
    ::placeholder {
      opacity: 0
    }

  }
}`;
