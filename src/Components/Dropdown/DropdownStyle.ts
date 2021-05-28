import styled from "styled-components";
import { colors } from "../../Utils";
import { DropdownStyleProps } from "./Dropdown";

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
`;

export const DropdownContainer = styled.div`
  position: relative;
`;
