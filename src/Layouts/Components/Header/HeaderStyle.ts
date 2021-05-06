import styled from "styled-components";
import { colors } from "../../../Utils/colors";

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
