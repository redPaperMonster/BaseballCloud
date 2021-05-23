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
import PersonalInfoItem from "./Components/PersonalInfoItem/PersonalInfoItem";
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
import SchoolInfoItem from "./Components/SchoolInfoItem/SchoolInfoItem";
import SidebarFavoriteButton from "./Components/SidebarFavoriteButton/SidebarFavoriteButton";
import { useQuery } from "@apollo/client";
import { queries } from "../../Schemas";

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
  const { loading, data }: any = useQuery(queries.getPlayerProfile, {
    variables: { id: (params && params.id) || user.id },
  });
  const [playerData, setPlayerData] = useState<any>();
  useEffect(() => {
    if (!loading) {
      if (player) {
        setPlayerData(transformData(player));
      } else if (params.id && data) {
        setPlayerData(data.profile);
      } else {
        setPlayerData(user);
      }
    }
  }, [data, player, user]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (!playerData) return null;
  return (
    <div>
      <UserInfoContainer>
        <EditButtonWrapper>
          {params && params.id ? (
            <SidebarFavoriteButton
              isFavorite={playerData.favorite}
              id={playerData.id}
            />
          ) : (
            <EditButton onClick={setFormShow}>
              <EditIcon />
            </EditButton>
          )}
        </EditButtonWrapper>
        <ImageWrapper>
          <UserImage url={playerData.avatar} />
        </ImageWrapper>
        <UserInfoWrapper>
          <UserName>{`${playerData.first_name} ${playerData.last_name}`}</UserName>
          <FirstPosition>{playerData.position}</FirstPosition>
          <SecondPosition>{playerData.position2}</SecondPosition>
        </UserInfoWrapper>
      </UserInfoContainer>
      <PersonalInfo>
        <PersonalInfoItem
          icon={<AgeIcon />}
          text="Age"
          value={playerData.age}
        />
        <PersonalInfoItem
          icon={<HeightIcon />}
          text="Height"
          value={`${playerData.feet} ft ${playerData.inches} in`}
        />
        <PersonalInfoItem
          icon={<WeightIcon />}
          text="Weight"
          value={playerData.weight}
        />
        <PersonalInfoItem
          icon={<ThrowIcon />}
          text="Throws"
          value={playerData.throws_hand}
        />
        <PersonalInfoItem
          icon={<BatsIcon />}
          text="Bats"
          value={playerData.bats_hand}
        />
      </PersonalInfo>
      <SchoolInfo>
        {playerData.school && playerData.school.name && (
          <SchoolInfoItem title="School" text={playerData.school.name} />
        )}
        {playerData.school_year && (
          <SchoolInfoItem title="School year" text={playerData.school_year} />
        )}
        {playerData.teams && playerData.teams.length !== 0 && (
          <SchoolInfoItem
            title="Team"
            text={playerData.teams.map((i: any) => {
              return (
                i.name &&
                (i === playerData.teams.slice(-1)[0] ? i.name : `${i.name}, `)
              );
            })}
          />
        )}
        {playerData.facilities && playerData.facilities.length !== 0 && (
          <SchoolInfoItem
            title="Facility"
            text={playerData.facilities.map((i: any) => {
              return (
                i.u_name &&
                (i === playerData.facilities.slice(-1)[0]
                  ? i.u_name
                  : `${i.u_name}, `)
              );
            })}
          />
        )}
        {playerData.biography && (
          <div>
            <TitleWrapper>
              <FormTitle>About</FormTitle>
            </TitleWrapper>
            <BioText>{playerData.biography}</BioText>
          </div>
        )}
      </SchoolInfo>
    </div>
  );
};

export default SidebarInfo;
