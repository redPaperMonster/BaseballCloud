import React from "react";
import { useSelector } from "react-redux";
import {
  AgeIcon,
  BatsIcon,
  EditIcon,
  HeightIcon,
  ThrowIcon,
  WeightIcon,
} from "../../../../../Assets/icons";
import { userSelector } from "../../../../../Store";
import PersonalInfoItem from "./PersonalInfoItem/PersonalInfoItem";
import SchoolInfoItem from "./SchoolInfoItem/SchoolInfoItem";
import {
  EditButton,
  PersonalInfo,
  SchoolInfo,
  UserInfoContainer,
  EditButtonWrapper,
  UserImage,
  ImageWrapper,
  UserInfoWrapper,
  UserName,
  FirstPosition,
  SecondPosition,
} from "./SidebarInfoStyle";

interface SidebarInfoProps {}

export interface SidebarInfoStyleProps {
  url: string;
}

const SidebarInfo: React.FC<SidebarInfoProps> = ({}) => {
  const userData = useSelector(userSelector.getUserData());

  return (
    <div>
      <UserInfoContainer>
        <EditButtonWrapper>
          <EditButton>
            <EditIcon />
          </EditButton>
        </EditButtonWrapper>
        <ImageWrapper>
          <UserImage url={userData.avatar} />
        </ImageWrapper>
        <UserInfoWrapper>
          <UserName>{`${userData.first_name} ${userData.last_name}`}</UserName>
          <FirstPosition>{userData.position}</FirstPosition>
          <SecondPosition>{userData.position2}</SecondPosition>
        </UserInfoWrapper>
      </UserInfoContainer>
      <PersonalInfo>
        <PersonalInfoItem icon={<AgeIcon />} text="Age" value={userData.age} />
        <PersonalInfoItem
          icon={<HeightIcon />}
          text="Height"
          value={`${userData.feet} ft ${userData.inches} in`}
        />
        <PersonalInfoItem
          icon={<WeightIcon />}
          text="Weight"
          value={userData.weight}
        />
        <PersonalInfoItem
          icon={<ThrowIcon />}
          text="Throws"
          value={userData.throws_hand}
        />
        <PersonalInfoItem
          icon={<BatsIcon />}
          text="Bats"
          value={userData.bats_hand}
        />
      </PersonalInfo>
      <SchoolInfo>
        <SchoolInfoItem title="School" text={userData.school_year} />
      </SchoolInfo>
    </div>
  );
};

export default SidebarInfo;
