import styled from "styled-components";
import { colors } from "../../../Utils/colors";
import { SwitchRoleButtonStyleProps } from "./Registration";
import { Link } from "react-router-dom";

export const FormContainer = styled.div``;
export const Title = styled.div`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 400;
  text-align: center;
  margin-bottom: 8px;
  color: ${colors.white};
`;

export const SubTitle = styled(Title)`
  font-size: 16px;
`;

export const SwitchRolePlayer = styled.button<SwitchRoleButtonStyleProps>`
  padding: 15px 45px;
  display: flex;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.13;
  background-color: ${(props) => (props.checked ? colors.green : colors.white)};
  border: solid 1px ${colors.green};
  color: ${(props) => (props.checked ? colors.white : colors.green)};
  &:hover {
    color: ${colors.white};
    background-color: ${colors.green};
  }
`;
export const SwitchRoleScout = styled(
  SwitchRolePlayer
)<SwitchRoleButtonStyleProps>`
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Icon = styled.span`
  background-color: ${colors.green};
  display: flex;
  margin-right: 6px;
  white-space: nowrap;
  border-radius: 3px;
  border: none;
`;

export const SwitchWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const RegistrationNote = styled.div`
  background: #48bbff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;
export const RegistrationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InfoWrapper = styled.div`
  display: block;
  margin-bottom: 8px;
  margin-top: 8px;
  padding-left: 10px;
  padding-right: 10px;
`;
export const InfoLink = styled.a`
  color: ${colors.blue};
  text-decoration: none;
`;
export const FooterText = styled.div`
  color: ${colors.blue};
  text-decoration: none;
`;
export const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterLink = styled(Link)`
  color: ${colors.lightBlue};
  text-decoration: none;
  padding-left: 3px;
`;
