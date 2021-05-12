import styled from "styled-components";
import { colors } from "../../../Utils/colors";
import { FilterIconStyleProps, FilterInputStyleProps } from "./FilterInput";

export const InputWrapper = styled.div`
  display: flex;
  padding-right: 10px;
`;

export const IconWrapper = styled.div<FilterIconStyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: rotate(${(props) => (props.isFocused ? "180" : "0")}deg);
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Input = styled.input<FilterInputStyleProps>`
  display: block;
  border: none;
  width: ${(props) => props.width}px;
  line-height: 19px;
  min-height: 38px;
  font-weight: 400;
  font-size: 16px;

  color: ${colors.secondaryText};
  &:focus,
  &:active {
    width: 180px;
    border-bottom: 1px solid ${colors.lightBlue};
    outline: none;
    transition: width 0.5s;
    ::placeholder {
      color: ${colors.secondaryText};
    }
  }
  ::placeholder {
    color: ${colors.lightBlue};
  }
`;
