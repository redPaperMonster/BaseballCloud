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
import {
  PlayerDataType,
  playerSelector,
  UserDataType,
  userSelector,
} from "../../../../../Store";
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
import { StyledToast, LoaderWrapper } from "../../../../../Components";
import Loader from "react-loader-spinner";
import image from "../../../../../Assets/img/UserAvatar.png";
import {
  FacilityDataType,
  TeamDataType,
} from "../../../../../Store/UserSlice/types";
interface SidebarInfoProps {
  setFormShow?: () => void;
  isPlayerProfile?: boolean;
  params?: { id: string };
}

export interface SidebarInfoStyleProps {
  url: string;
}

const SidebarInfo: React.FC<SidebarInfoProps> = ({
  setFormShow,
  params = { id: "" },
}) => {
  let user: UserDataType = useSelector(userSelector.getUserData());
  let player: PlayerDataType | undefined = useSelector(
    playerSelector.getPlayerById(params.id)
  );
  const { loading, data } = useQuery(queries.getPlayerProfile, {
    variables: { id: (params && params.id) || user.id },
  });
  const [playerData, setPlayerData] = useState<UserDataType | PlayerDataType>();
  useEffect(() => {
    if (!loading) {
      if (player) {
        setPlayerData(transformData(player));
      } else if (params.id && data) {
        setPlayerData(transformData(data.profile));
      } else {
        setPlayerData(transformData(user));
      }
    }
  }, [data, player, user]);
  if (loading) {
    return (
      <LoaderWrapper>
        <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
      </LoaderWrapper>
    );
  }

  if (!playerData) return null;
  return (
    <div>
      <UserInfoContainer>
        <EditButtonWrapper>
          {params && params.id ? (
            <SidebarFavoriteButton
              isFavorite={(playerData as PlayerDataType).favorite || false}
              id={playerData.id}
            />
          ) : (
            <EditButton onClick={setFormShow}>
              <EditIcon />
            </EditButton>
          )}
        </EditButtonWrapper>
        <ImageWrapper>
          <UserImage url={(playerData as UserDataType).avatar || image} />
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
          value={(playerData as UserDataType).throws_hand}
        />
        <PersonalInfoItem
          icon={<BatsIcon />}
          text="Bats"
          value={(playerData as UserDataType).bats_hand}
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
            text={playerData.teams.map((i: TeamDataType) => {
              return (
                i.name &&
                (i === playerData.teams.slice(-1)[0] ? i.name : `${i.name}, `)
              );
            })}
          />
        )}
        {(playerData as UserDataType).facilities &&
          (playerData as UserDataType).facilities?.length !== 0 && (
            <SchoolInfoItem
              title="Facility"
              text={
                (playerData as UserDataType).facilities?.map(
                  (i: FacilityDataType) => {
                    return (
                      i.u_name &&
                      (i ===
                      (playerData as UserDataType).facilities?.slice(-1)[0]
                        ? i.u_name
                        : `${i.u_name}, `)
                    );
                  }
                ) || ""
              }
            />
          )}
        {(playerData as UserDataType).biography && (
          <div>
            <TitleWrapper>
              <FormTitle>About</FormTitle>
            </TitleWrapper>
            <BioText>{(playerData as UserDataType).biography}</BioText>
          </div>
        )}
      </SchoolInfo>
      <StyledToast />
    </div>
  );
};

export default SidebarInfo;
