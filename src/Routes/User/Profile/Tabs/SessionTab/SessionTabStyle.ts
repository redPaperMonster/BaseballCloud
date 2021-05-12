import styled from "styled-components";
import { colors } from "../../../../../Utils/colors";

export const TabContainer = styled.div`
  height: 100%;
  width: 100%;

  min-height: 420px;
  color: #667784;
  font-size: 16px;
`;

export const SessionHeader = styled.div`
  display: flex;
  width: 100%;
  flex: 0 0 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 21px;
`;

export const SessionTitle = styled.div`
  color: ${colors.black};
  font-size: 18px;
  font-weight: 400;
  text-align: left;
`;

export const FilterWrapper = styled.div``;

export const SessionTable = styled.div``;
export const TableHeadersWrapper = styled.div`
  top: 0;
  background: #fff;
  position: sticky;
  top: 0;
  min-height: 44px;
  margin-bottom: 6px;
  display: flex;
  width: 100%;
  flex: 0 0 100%;
  align-items: center;
  border-radius: 4px;
  max-width: 100%;
`;
export const TableHeader = styled.div`
  width: 30%;
  flex: 1 0 28%;
  background: #fff;
  font-size: 14px;
  line-height: 1;
  font-weight: 300;
  color: #667784;
`;
export const TableFirstHeader = styled(TableHeader)`
  width: 35%;
  flex: 1 0 32%;
`;
export const TableLastHeader = styled(TableHeader)`
  width: 10%;
  flex: 1 0 10%;
`;
export const TableItems = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  min-height: 420px;
  color: #667784;
  font-size: 16px;
`;
