import styled from "styled-components";
import { colors } from "../../../Utils/colors";

export const SummaryEventsWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  background: ${colors.white};
  margin: 16px;
  padding: 16px;
  border-radius: 8px;
  box-sizing: border-box;
  flex-grow: 1;
`;
export const PitcherSummarySection = styled(Card)`
  display: flex;
  max-width: 100%;
  min-width: 0;
  flex-direction: column;
  margin-right: 20px;
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  max-width: 100%;
  min-width: 0;
  flex-direction: column;
  align-items: start;
  margin-right: 20px;
`;

export const CardTitle = styled.div`
  text-align: center;
  color: ${colors.darkGray};
  font-size: 18px;
  font-weight: 900;
  color: ${colors.black};
`;

export const ProgressContainer = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: flex;
`;

export const ProgressItemWrapper = styled.div`
  padding: 16px 24px 0 0;
  display: flex;
  flex-direction: column;
  width: 200px;
`;
export const ProgressTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const ProgressTitle = styled.div`
  font-size: 16px;
  color: ${colors.darkGray};
`;

export const ProgressInfo = styled(ProgressTitle)`
  font-weight: 700;
`;

export const RecentEventsSection = styled(Card)``;
export const TabsSection = styled(Card)``;

export const CardText = styled.div`
  font-size: 16px;
  color: ${colors.darkGray};
`;
