import styled from "styled-components";
import { colors } from "../../../Utils/colors";
import { Link } from "react-router-dom";
import { HeaderImageStyleProps, HeaderLinkStyleProps } from "./Header";

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
export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const NavLink = styled(Link)<HeaderLinkStyleProps>`
  padding: 0 8px;
  color: ${colors.secondaryText} !important;
  text-decoration: none !important;
  position: relative;
  display: flex;
  align-items: flex-start;
  align-items: center;

  &:hover:after,
  &:active:after {
    border-bottom: 4px solid #788b99;
    content: "";
    display: block;
    left: 0;
    right: 0;
    position: absolute;
    bottom: -16px;
  }
  &:hover:after {
    border-color: rgba(120, 139, 153, 0.4);
  }
  ${(props) => {
    if (props.active === "true") {
      return "&:after {border-bottom: 4px solid #788b99;  bottom: -16px; content: ''; display: block; left: 0; left: 0; position: absolute; width: 100%}";
    }
  }}
`;
export const NavMenu = styled.div`
  display: inline-flex;
  margin-left: 16px;
`;
export const UserImage = styled.div<HeaderImageStyleProps>`
  background-image: url(${(props) => props.url});
  width: 32px;
  height: 32px;
  background-size: cover;
  background-position: 50% 50%;
  display: block;
  flex: 0 0 32px;
  overflow: hidden;
  border-radius: 50%;
`;
export const Dropdown = styled.div``;
