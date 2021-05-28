import styled from "styled-components";
import { colors } from "../../../../Utils/colors";

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
  left: 70px;
  top: 35px;
`;
