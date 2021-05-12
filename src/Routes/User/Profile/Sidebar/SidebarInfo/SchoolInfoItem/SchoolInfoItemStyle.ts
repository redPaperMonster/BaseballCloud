import styled from "styled-components";
import { colors } from "../../../../../../Utils/colors";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  font-size: 14px;
  line-height: 17px;
  font-weight: 300;
  color: ${colors.darkGray};
  margin-bottom: 3px;
  text-align: left;
`;
export const Text = styled.div`
  font-size: 16px;
  color: ${colors.darkGray};
  word-wrap: break-word;
  margin-bottom: 11px;
`;
