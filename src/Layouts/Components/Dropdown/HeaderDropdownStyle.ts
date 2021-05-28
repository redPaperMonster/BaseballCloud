import styled from "styled-components";
import { colors } from "../../../Utils/colors";
import { Link } from "react-router-dom";
import { DropdownStyleProps } from "./HeaderDropdown";

export const DropdownButton = styled.button`
  white-space: nowrap;
  display: flex;
  align-items: center;
  display: block;
  padding: 7px 19px 10px 18px;
  border-radius: 4px;
  box-shadow: none;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  border-style: none;
  color: ${colors.darkGray};
  background-color: ${colors.white};
  cursor: pointer;
  &:hover {
    background-color: ${colors.lightGray};
  }
`;

export const DropdownLink = styled(Link)`
  display: block;
  padding: 8px 16px;
  background: ${colors.white};
  line-height: 1;
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  color: ${colors.secondaryText};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: rgba(72, 187, 255, 0.1);
  }
`;
export const DropdownItem = styled.a`
  display: block;
  padding: 8px 16px;
  background: ${colors.white};
  line-height: 1;
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  color: ${colors.secondaryText};
  cursor: pointer;
  &:hover {
    background-color: rgba(72, 187, 255, 0.1);
  }
`;

export const IconWrapper = styled.span`
  margin-left: 6px;
`;
