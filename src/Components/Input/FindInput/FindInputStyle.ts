import styled from "styled-components";
import { colors } from "../../../Utils/colors";

export const InputContainer = styled.div`
  display: flex;
  position: relative;
`;

export const Input = styled.input`
  width: 100px;
  display: block;
  padding: 5px 5px 5px 24px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  color: ${colors.secondaryText};
  border: none;
  border-bottom: 1px solid ${colors.lightBlue};
  margin: 0;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.gray};
  }
`;
export const FindButton = styled.button`
  padding: 0;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: block;
  border-radius: 4px;
  box-shadow: none;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  border-style: none;
  background-color: transparent;
`;
