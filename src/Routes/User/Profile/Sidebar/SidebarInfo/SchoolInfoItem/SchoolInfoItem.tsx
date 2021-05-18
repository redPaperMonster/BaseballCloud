import React, { ReactNode } from "react";
import { ItemContainer, Title, Text } from "./SchoolInfoItemStyle";

export interface PersonalInfoProps {
  text: string | string[];
  title: string;
}

const SchoolInfoItem: React.FC<PersonalInfoProps> = ({ text, title }) => {
  return (
    <ItemContainer>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </ItemContainer>
  );
};

export default SchoolInfoItem;
