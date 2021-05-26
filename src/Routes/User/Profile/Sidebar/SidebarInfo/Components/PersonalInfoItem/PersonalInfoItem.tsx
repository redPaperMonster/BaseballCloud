import React, { ReactNode } from "react";
import {
  IconWrapper,
  ItemContainer,
  ValueWrapper,
  TextWrapper,
} from "./PersonalInfoItemStyle";

export interface PersonalInfoProps {
  icon: ReactNode;
  text: string;
  value: number | string | undefined;
}

const PersonalInfoItem: React.FC<PersonalInfoProps> = ({
  icon,
  text,
  value,
}) => {
  return (
    <ItemContainer>
      <IconWrapper>{icon}</IconWrapper>
      <TextWrapper>{text}</TextWrapper>
      <ValueWrapper>{value && value.toString()}</ValueWrapper>
    </ItemContainer>
  );
};

export default PersonalInfoItem;
