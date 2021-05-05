import styled from "styled-components";
import { colors } from "../Utils/colors";

export const HeaderContainer = styled.div`
  grid-area: hd;
  grid-column-end: span 2;
  background: ${colors.white};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
  padding: 8px;
`;
export const MainContent = styled.div`
  grid-area: content;
  background: #fff;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  height: 100%;
  box-sizing: inherit;
`;

export const Main = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "hd hd"
    "content content"
    "ft ft";
`;
export const Footer = styled.div`
  grid-area: ft;
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

export const LegalWrapper = styled.div`
  grid-area: ft;
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
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
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;
