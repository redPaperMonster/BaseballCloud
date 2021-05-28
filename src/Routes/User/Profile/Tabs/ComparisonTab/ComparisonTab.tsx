import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SearchIcon } from "../../../../../Assets/icons";
import {
  FilterInput,
  LoaderWrapper,
  useComponentOpened,
} from "../../../../../Components";
import { PlayerDataType, userSelector } from "../../../../../Store";
import { queries } from "../../Schemas";
import {
  ComparisonHeader,
  ComparisonTable,
  ComparisonTableCell,
  ComparisonTableRow,
  PlayerAvatar,
  PlayerSection,
  TabContainer,
  UserAvatar,
  UserName,
  UserSection,
} from "./ComparisonTabStyle";
import SearchDropdown from "./Components/Dropdown/SearchDropdown";
import image from "../../../../../Assets/img/UserAvatar.png";
import Loader from "react-loader-spinner";
export type ComparisonStyleProps = {
  url: string;
};
interface ComparisonTabProps {
  playerId?: string;
}

const ComparisonTab: React.FC<ComparisonTabProps> = ({ playerId }) => {
  const [currentPlayer, setCurrentPlayer] = useState<PlayerDataType>();
  const [playerName, setPlayerName] = useState<string>("");

  const userId = useSelector(userSelector.getUserId());
  const { ref, isOpened, setIsOpened } = useComponentOpened(false);
  const { loading, data } = useQuery(queries.getPlayerProfile, {
    variables: { id: playerId || userId },
  });

  const playerAvatar = useQuery(queries.getPlayerAvatar, {
    variables: currentPlayer
      ? {
          id: currentPlayer.id,
        }
      : {},
  });

  if (loading) {
    return (
      <TabContainer>
        <LoaderWrapper isChild>
          <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
        </LoaderWrapper>
      </TabContainer>
    );
  }
  const setHeight = () => {
    if (currentPlayer) {
      return `${currentPlayer.feet} ft ${currentPlayer.inches || 0} in `;
    } else return "-";
  };
  return (
    <TabContainer>
      <ComparisonHeader>
        <UserSection>
          <UserAvatar url={data.profile.avatar || image} />
          <UserName>{`${data.profile.first_name} ${data.profile.last_name}`}</UserName>
        </UserSection>
        <PlayerSection>
          {loading ? (
            <Loader type="TailSpin" color="#00BFFF" height={30} width={30} />
          ) : (
            <PlayerAvatar
              url={
                (playerAvatar.data && playerAvatar.data.profile.avatar) || image
              }
            />
          )}
          <div ref={ref}>
            <FilterInput
              icon={<SearchIcon />}
              placeholder="Enter players name"
              onChange={(e) => {
                setPlayerName(e);
                setIsOpened(true);
              }}
              onFocus={() => {
                setIsOpened(true);
              }}
              value={playerName}
            />
            {playerName && (
              <SearchDropdown
                playerName={playerName}
                userPosition={data.profile.position}
                isOpened={isOpened}
                setIsOpened={setIsOpened}
                setCurrentPlayer={setCurrentPlayer}
                setPlayerName={setPlayerName}
              />
            )}
          </div>
        </PlayerSection>
      </ComparisonHeader>
      <ComparisonTable>
        <ComparisonTableRow>
          <ComparisonTableCell>Age: {data.profile.age}</ComparisonTableCell>
          <ComparisonTableCell>
            Age: {(currentPlayer && currentPlayer.age) || "-"}
          </ComparisonTableCell>
        </ComparisonTableRow>
        <ComparisonTableRow>
          <ComparisonTableCell>
            Height: {data.profile.feet} ft {data.profile.inches || "0"} in
          </ComparisonTableCell>
          <ComparisonTableCell>Height: {setHeight()}</ComparisonTableCell>
        </ComparisonTableRow>
        <ComparisonTableRow>
          <ComparisonTableCell>
            Weight: {data.profile.weight}
          </ComparisonTableCell>
          <ComparisonTableCell>
            Weight: {(currentPlayer && currentPlayer.weight) || "-"}
          </ComparisonTableCell>
        </ComparisonTableRow>
      </ComparisonTable>
    </TabContainer>
  );
};

export default ComparisonTab;
