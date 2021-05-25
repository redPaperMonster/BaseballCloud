import styled from "styled-components";
import { colors } from "../../../../../Utils";
import { SidebarFormStyleProps } from "./SidebarForm";

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 23px;
`;

export const UserImage = styled.div<SidebarFormStyleProps>`
  background-image: url(${(props) => props.url});
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 50%;
  margin-bottom: 8px;
`;
export const ChoosePhotoLabel = styled.label`
  margin-bottom: 0;
  font-size: 14px;
  line-height: 1;
  font-weight: 400;
  color: #788b99;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    color: #48bbff;
    text-decoration: underline;
  }
  border: none;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
`;
export const ChoosePhotoInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;
export const ChoosePhotoLabelWrapper = styled.div`
  display: flex;
  margin-top: 8px;
`;
export const NameFormsWrapper = styled.div`
  display: flex;
  margin: 10px 0px;
`;
export const FormsSelectWrapper = styled.div`
  margin: 10px 0px;
  width: 100%;
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
  margin-bottom: 15px;
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
export const HeightWrapper = styled.div`
  display: flex;
  margin: 10px 0px;
  justify-content: space-between;
`;
export const HandSelectContainer = styled.div`
  position: relative;
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
`;
export const HandSelectWrapper = styled.div`
  width: 48%;
  flex: 0 0 48%;
`;

export const SelectWrapper = styled.div`
  margin: 10px 0px;
`;
export const FormTextarea = styled.textarea`
  display: block;
  min-height: 110px;
  resize: none;
  border-radius: 4px;
  background-color: #eff1f3;
  padding: 11px 16px;
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  color: #667784;
  border: 1px solid transparent;
  &:focus {
    outline: none;
    background-color: #fff;
    border: solid 1px #48bbff;
  }
`;
export const FormTextareaWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex: 0 0 100%;
  flex-direction: column;
  margin-bottom: 15px;
`;
export const FormButtonContainer = styled.div`
  display: flex;
`;
export const FormButtonWrapper = styled.div`
  margin-right: 12px;
  width: 100%;
  flex: 1 1 auto;
`;

export const ErrorText = styled.div`
  display: flex;
  color: ${colors.red};
  margin-top: 8px;
  margin-bottom: 4px;
`;
export const UploadButton = styled.a`
  color: ${colors.lightBlue};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const UploadCancelButton = styled.a`
  color: ${colors.darkGray};
  margin-left: 8px;
`;
export const FileNameLabel = styled.label`
  margin-bottom: 0;
  font-size: 14px;
  line-height: 1;
  font-weight: 400;
  color: #788b99;
  cursor: pointer;
  white-space: nowrap;
`;
export const UploadAvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const UploadButtonsWrapper = styled.div`
  padding-top: 12px;
`;
