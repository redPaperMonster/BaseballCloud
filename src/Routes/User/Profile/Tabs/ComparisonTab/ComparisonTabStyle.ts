import styled from "styled-components";
import { colors } from "../../../../../Utils/colors";
import { ComparisonStyleProps } from "./ComparisonTab";

export const TabContainer = styled.div`
  padding-top: 10px;
  height: 100%;
  min-height: 420px;
  width: 100%;
`;
export const ComparisonHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const ComparisonTable = styled.div``;
export const UserSection = styled.div`
  display: flex;
`;
export const PlayerSection = styled.div`
  display: flex;
  position: relative;
  overflow: visible !important;
`;
export const UserName = styled.button`
  padding: 0;
  font-size: 16px;
  line-height: 19px;
  color: ${colors.lightBlack};
  white-space: nowrap;
  display: flex;
  align-items: flex-start;
  border: none;
  background-color: ${colors.white};
`;
export const UserAvatar = styled.div<ComparisonStyleProps>`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: 50% 50%;
  display: block;
  overflow: hidden;
  border-radius: 50%;
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  margin-right: 8px;
  overflow: hidden;
  border-radius: 50%;
`;
export const PlayerAvatar = styled.div<ComparisonStyleProps>`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: 50% 50%;
  display: block;
  overflow: hidden;
  border-radius: 50%;
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  margin-right: 8px;
  overflow: hidden;
  border-radius: 50%;
`;
export const ComparisonTableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 15px;
  min-height: 44px;
  margin-bottom: 6px;
`;
export const ComparisonTableCell = styled.div``;
export const SearchInput = styled.input``;
