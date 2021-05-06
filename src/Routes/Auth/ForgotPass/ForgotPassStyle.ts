import styled from "styled-components";
import { colors } from "../../../Utils/colors";
import { Link } from "react-router-dom";

export const FormContainer = styled.div``;
export const Title = styled.div`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 400;
  text-align: center;
  color: ${colors.darkGray};
  margin-bottom: 8px;
`;

export const SubTitle = styled(Title)`
  font-size: 16px;
`;
export const TitleWrapper = styled.div`
  padding-bottom: 50px;
`;

export const ForgotPassLink = styled(Link)`
  color: ${colors.blue};
  text-decoration: none;
  text-align: center;
`;
export const SignUpLink = styled(Link)`
  color: ${colors.lightBlue};
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  text-decoration: underline;
  padding-left: 3px;
`;
export const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
`;
export const FormFooter = styled.div`
  display: flex;
  justify-content: center;
`;
