import styled from "styled-components";
import { colors } from "../../Utils/colors";

export const MainContent = styled.div`
  grid-area: content;
  background: #fff;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

export const Main = styled.div`
  height: 100vh;
  display: grid;
  width: 100vw;
  background: ${colors.white};
  overflow: auto;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "hd hd"
    "content content"
    "ft ft";
`;
