import styled from "styled-components";
import { colors } from "../../../../Utils/colors";
import { DropdownStyleProps } from "./ProfileTabs";

export const TabList = styled.div`
  margin: 0;
  padding: 0;
  box-shadow: unset;
  display: flex;
  justify-content: flex-start;
`;
export const TabPanel = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const TabText = styled.div`
  margin: 0;
  padding: 0;
  box-shadow: unset;
  display: flex;
  justify-content: flex-start;
`;
export const DropdownPanel = styled.div<DropdownStyleProps>`
  display: ${(props) => (props.isDropdownOpen ? "block" : "none")};
  width: 178px;
  position: absolute;
  top: 100%;
  left: -15px;
  margin-top: 12px;
  padding: 8px 0;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 3px 8px 0 rgb(0 0 0 / 15%);
  border: solid 1px #ebebeb;
  z-index: 100;
  top: inherit;
`;

export const DropdownItem = styled.div`
  display: block;
  padding: 8px 16px;
  background: #fff;
  line-height: 1;
  color: #788b99;
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  color: #788b99;
  cursor: pointer;
  &:hover {
    background-color: ${colors.softLightBlue};
  }
`;
export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;
