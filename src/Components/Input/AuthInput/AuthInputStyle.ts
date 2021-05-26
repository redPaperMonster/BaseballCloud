import styled from "styled-components";
import { colors } from "../../../Utils/colors";

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 15px;
  display: flex;
  width: 100%;
  flex: 0 0 100%;
  flex-direction: column;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 4px;
  background-color: #eff1f3;
  padding: 1px 12px 1px 50px;
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  color: #667784;
  border: 1px solid transparent;
  &:focus {
    outline: none;
    border-radius: 4px;
    border: 1px solid ${colors.lightBlue};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
`;

export const IconWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 19px;
  left: 17px;
  bottom: 0;
  align-items: start;
  color: ${colors.darkGray};
  margin-right: 20px;
`;

export const ErrorText = styled.div`
  display: flex;
  color: ${colors.red};
  margin-top: 8px;
  margin-bottom: 4px;
`;
