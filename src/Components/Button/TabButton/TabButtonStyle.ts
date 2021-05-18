import styled from "styled-components";
import { colors } from "../../../Utils/colors";
import { ButtonStyleProps } from "./TabButton";

export const Button = styled.button<ButtonStyleProps>`
  padding: 8px;
  margin: 8px;
  border: 2px solid ${colors.darkGray};
  border-radius: 40px;
  position: relative;
  background-color: ${(props) =>
    props.isActive ? colors.darkGray : colors.white};

  list-style: none;
  margin-right: 10px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  color: ${(props) => (props.isActive ? colors.white : colors.secondaryText)};
  cursor: pointer;
  &:hover {
    background-color: ${colors.gray};
  }
  &:focus {
    outline: none;
  }
`;
