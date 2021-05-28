import styled from "styled-components";
import { colors } from "../../../Utils/colors";
import { SubmitButtonStyleProps } from "./SubmitButton";

export const Button = styled.button<SubmitButtonStyleProps>`
  font-size: 16px;
  color: ${(props) => (props.isCancelType ? colors.black : colors.white)};
  font-weight: 400;
  border: solid 1px
    ${(props) => (props.isCancelType ? colors.gray : "transparent")};
  background-color: ${(props) =>
    props.isCancelType ? colors.white : colors.lightBlue};
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;
  flex: 1 1 auto;
  margin-bottom: 15px;
  display: block;
  border-radius: 4px;
  &:hover {
    box-shadow: 0 0 4px 0 ${colors.lightBlue};
    ${(props) => (props.isCancelType ? "color:" + colors.lightBlue : "")}
  }
`;
