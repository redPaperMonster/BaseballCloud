import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  AgeIcon,
  BatsIcon,
  EditIcon,
  HeightIcon,
  ThrowIcon,
  WeightIcon,
} from "../../../../../Assets/icons";
import { playerSelector, userSelector } from "../../../../../Store";
import PersonalInfoItem from "./PersonalInfoItem/PersonalInfoItem";
import { transformData } from "../../../../../Utils";
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
  TitleWrapper,
  FormTitle,
  BioText,
} from "./SidebarInfoStyle";
import SchoolInfoItem from "./SchoolInfoItem/SchoolInfoItem";

interface SidebarInfoProps {
  setFormShow?: () => void;
  isPlayerProfile?: boolean;
  params?: any;
}

export interface SidebarInfoStyleProps {
  url: string;
}

const SidebarInfo: React.FC<SidebarInfoProps> = ({ setFormShow, params }) => {
  let user: any = useSelector(userSelector.getUserData());
  let player: any = useSelector(playerSelector.getPlayerById(params.id));
  const [userData, setUserData] = useState(user);
  useEffect(() => {
    player[0] && params.id && setUserData(transformData(player[0]));
  }, []);

  return (
    <div>
      <UserInfoContainer>
        <EditButtonWrapper>
          {params && params.id ? (
            <div>LIKE!</div>
          ) : (
            <EditButton onClick={setFormShow}>
              <EditIcon />
            </EditButton>
          )}
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
        {userData.school && userData.school.name && (
          <SchoolInfoItem title="School" text={userData.school.name} />
        )}
        {userData.school_year && (
          <SchoolInfoItem title="School year" text={userData.school_year} />
        )}
        {userData.teams && userData.teams.length !== 0 && (
          <SchoolInfoItem
            title="Team"
            text={userData.teams.map((i: any) => {
              return (
                i.name &&
                (i === userData.teams.slice(-1)[0] ? i.name : `${i.name}, `)
              );
            })}
          />
        )}
        {userData.facilities && userData.facilities.length !== 0 && (
          <SchoolInfoItem
            title="Facility"
            text={userData.facilities.map((i: any) => {
              return (
                i.u_name &&
                (i === userData.facilities.slice(-1)[0]
                  ? i.u_name
                  : `${i.u_name}, `)
              );
            })}
          />
        )}
        {userData.biography && (
          <div>
            <TitleWrapper>
              <FormTitle>About</FormTitle>
            </TitleWrapper>
            <BioText>{userData.biography}</BioText>
          </div>
        )}
      </SchoolInfo>
    </div>
  );
};

export default SidebarInfo;
