import styled from "styled-components";
import { colors } from "../../../../../../../Utils";

export const DropdownListItem = styled.a`
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
