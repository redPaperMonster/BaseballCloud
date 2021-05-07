import styled from "styled-components";
import { colors } from "../../../Utils/colors";

export const FooterContainer = styled.div`
  grid-area: ft;
  background: ${colors.white};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  font-size: 14px;
  padding: 0px 16px;
`;

export const LegalWrapper = styled.div`
  grid-area: ft;
  background: ${colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLink = styled.a`
  padding: 8px;
  color: ${colors.blue};
  text-decoration: none;
  &:hover {
    color: ${colors.darkBlue};
    text-decoration: underline;
  }
`;
export const LegalSpan = styled.span`
  padding-right: 10px;
`;

export const MediaWrapper = styled.div`
  grid-area: ft;
  background: ${colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;
