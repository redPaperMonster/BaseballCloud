import styled from "styled-components";
import { colors } from "../../../../../../../Utils/colors";

export const InputContainer = styled.div`
  display: flex;
  margin-right: 20px;
`;
export const IconWrapper = styled.div`
  display: flex;
  margin-right: 6px;
  margin-top: 2px;
`;
export const ArrowIconWrapper = styled.div`
  display: flex;
  margin-left: 6px;
  margin-top: 6px;
  width: 16px;
  height: 9px;
`;
export const InputButton = styled.button`
  padding: 0;
  font-size: 16px;
  line-height: 1.19;
  color: ${colors.lightBlue};
  display: flex;
  align-items: flex-start;
  border-radius: 4px;
  box-shadow: none;
  font-weight: 400;
  background-color: transparent;
  border-style: none;
  margin: 0;
`;
