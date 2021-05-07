import styled from "styled-components";
import { colors } from "../../../Utils/colors";
import { Link } from "react-router-dom";
import { DropdownStyleProps } from "./Dropdown";

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
export const DropdownPanel = styled.div<DropdownStyleProps>`
  width: 178px;
  position: absolute;
  top: 100%;
  margin-top: 12px;
  padding: 8px 0;
  border-radius: 5px;
  background-color: ${colors.white};
  box-shadow: 0 3px 8px 0 rgb(0 0 0 / 15%);
  border: solid 1px #ebebeb;
  z-index: 100;
  display: ${(props) => (props.isOpened ? "block" : "none")};
  right: 0px;
  &:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: -9px;
    right: 25px;
    z-index: 1;
    border-style: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent rgba(0, 0, 0, 0.15) transparent;
  }
  &:before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: -8px;
    right: 25px;
    z-index: 2;
    border-style: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #ffffff transparent;
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
export const DropdownContainer = styled.div`
  position: relative;
`;
export const IconWrapper = styled.span`
  margin-left: 6px;
`;
