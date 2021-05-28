import styled from "styled-components";
import { colors } from "../../../Utils/colors";
import { LoaderProps } from "./Network";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NetworkWrapper = styled.div`
  padding: 16px;
`;
export const NetworkContainer = styled.div`
  padding: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  width: 100%;
`;
export const NetworkHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0px;
`;
export const NetworkTitle = styled.div`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 400;
  text-align: center;
  color: ${colors.darkGray};
`;
export const NetworkFiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TableFilter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0px;
`;
export const PlayersCount = styled.div`
  font-size: 18px;
  color: ${colors.lightBlack};
  font-weight: 400;
  text-align: left;
`;
export const PlayerInputWrapper = styled.div``;

export const LoaderContainer = styled.div<LoaderProps>`
  height: ${(props) =>
    props.perPage === 10 ? `${props.perPage * 50}px;` : "100vh;"};
  display: flex;
  justify-content: center;
`;

export const FilterWrapper = styled.div`
  margin-left: 15px;
`;
