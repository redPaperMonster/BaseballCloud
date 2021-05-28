import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { mutations, queries } from "../../Schemas";
import {
  StyledToast,
  LoaderWrapper,
  ToastBody,
} from "../../../../../Components";
import Loader from "react-loader-spinner";
import image from "../../../../../Assets/img/UserAvatar.png";
import {
  FacilityDataType,
  TeamDataType,
} from "../../../../../Store/UserSlice/types";
import { toast } from "react-toastify";
import { playerActions } from "../../../../../Store/PlayersSlice/PlayerSlice";
interface SidebarInfoProps {
  setFormShow: React.Dispatch<React.SetStateAction<boolean>>;
  params: { id: string } | undefined;
}

export interface SidebarInfoStyleProps {
  url: string;
}

const SidebarInfo: React.FC<SidebarInfoProps> = ({ setFormShow, params }) => {
  const [playerData, setPlayerData] = useState<UserDataType | PlayerDataType>();
  let user: UserDataType = useSelector(userSelector.getUserData());

  const [getPlayer, { data, loading, refetch, previousData }] = useLazyQuery(
    queries.getPlayerProfile,
    {
      variables: { id: (params && params?.id) || user.id },
    }
  );
  const [updateFavorite, ff] = useMutation(mutations.updateFavorite);

  const dispatch = useDispatch();
  useEffect(() => {
    if (params?.id && !playerData && !data) {
      getPlayer();
    }
    if (params?.id && !playerData && data) {
      setPlayerData(transformData(data.profile));
    }
    if (params?.id && playerData && data !== previousData) {
      setPlayerData(transformData(data.profile));
    }
    if (!params?.id) {
      setPlayerData(transformData(user));
    }
  }, [data?.profile, user]);
  const handleFavoriteClick = () => {
    updateFavorite({
      variables: {
        form: {
          favorite: !(playerData as PlayerDataType).favorite,
          profile_id: playerData?.id,
        },
      },
    }).then((data) => {
      getPlayer();

      toast.success(() => (
        <ToastBody
          text={
            (playerData as PlayerDataType).favorite
              ? "This profile removed from favorite list successfully!"
              : "This profile added to favorite list successfully!"
          }
        />
      ));

      dispatch(
        playerActions.updateFavorite({
          id: playerData?.id,
          favorite: data.data.update_favorite_profile.favorite,
        })
      );
    });
  };
  if (loading && !playerData) {
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
              handleClick={handleFavoriteClick}
              isFavorite={(playerData as PlayerDataType).favorite || false}
            />
          ) : (
            <EditButton onClick={() => setFormShow(true)}>
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
          value={`${playerData.feet} ft ${playerData.inches || 0} in`}
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
