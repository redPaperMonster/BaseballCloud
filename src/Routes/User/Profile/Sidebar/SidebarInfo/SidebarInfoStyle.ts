import styled from "styled-components";
import { colors } from "../../../../../Utils/colors";
import { SidebarInfoStyleProps } from "./SidebarInfo";

export const UserInfoContainer = styled.div`
  position: relative;
`;

export const EditButtonWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 13px;
  padding: 0;
`;
export const EditButton = styled.button`
  display: block;
  border-style: none;
  background-color: ${colors.white};
`;
export const UserImage = styled.div<SidebarInfoStyleProps>`
  background-image: url(${(props) => props.url});
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 50%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 6px;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 6px;
  text-align: center;
  align-items: center;
`;

export const UserName = styled.div`
  font-size: 20px;
  line-height: 24px;
  color: ${colors.darkGray};
  word-wrap: break-word;
  word-break: break-all;
`;
export const FirstPosition = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: ${colors.secondaryText};
`;
export const SecondPosition = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: ${colors.secondaryText};
  border-top: 1px solid ${colors.gray};
`;

export const PersonalInfo = styled.div`
  display: flex;
  flex-flow: column;
`;

export const SchoolInfo = styled.div``;
export const BioText = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: ${colors.secondaryText};
  line-height: 1.75;
  word-wrap: break-word;
`;

export const FormTitle = styled.div`
  text-align: center;
  color: #667784;
  font-size: 18px;
  font-weight: 900;
  color: #414f5a;
  text-align: left;
  display: inline-block;
  position: relative;
  z-index: 1;
  background-color: #ffffff;
  padding-right: 12px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  position: relative;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 11px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #e7ebef;
    z-index: 0;
  }
`;
