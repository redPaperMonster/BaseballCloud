import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SearchIcon } from "../../../../../Assets/icons";
import { FilterInput } from "../../../../../Components";
import useComponentOpened from "../../../../../Layouts/Components/Dropdown/useComponentOpened";
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

const ComparisonTab: React.FC = () => {
  const userData = useSelector(userSelector.getUserData());
  const userPosition = useSelector(userSelector.getPosition());
  const { ref, isOpened, setIsOpened } = useComponentOpened(false);
  const [playerName, setPlayerName] = useState<string>("");
  const [currentPlayer, setCurrentPlayer] = useState<PlayerDataType>();
  const { loading, data } = useQuery(queries.getPlayerAvatar, {
    variables: currentPlayer
      ? {
          id: currentPlayer.id,
        }
      : {},
  });
  const setHeight = () => {
    if (currentPlayer) {
      return `${currentPlayer.feet} ft ${currentPlayer.inches || 0} in `;
    } else return "-";
  };
  return (
    <TabContainer>
      <ComparisonHeader>
        <UserSection>
          <UserAvatar url={userData.avatar || image} />
          <UserName>{`${userData.first_name} ${userData.last_name}`}</UserName>
        </UserSection>
        <PlayerSection>
          {loading ? (
            <Loader type="TailSpin" color="#00BFFF" height={30} width={30} />
          ) : (
            <PlayerAvatar url={(data && data.profile.avatar) || image} />
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
            {playerName && isOpened && (
              <SearchDropdown
                playerName={playerName}
                userPosition={userPosition}
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
          <ComparisonTableCell>Age: {userData.age}</ComparisonTableCell>
          <ComparisonTableCell>
            Age: {(currentPlayer && currentPlayer.age) || "-"}
          </ComparisonTableCell>
        </ComparisonTableRow>
        <ComparisonTableRow>
          <ComparisonTableCell>
            Height: {userData.feet} ft {userData.inches || "0"} in
          </ComparisonTableCell>
          <ComparisonTableCell>Height: {setHeight()}</ComparisonTableCell>
        </ComparisonTableRow>
        <ComparisonTableRow>
          <ComparisonTableCell>Weight: {userData.weight}</ComparisonTableCell>
          <ComparisonTableCell>
            Weight: {(currentPlayer && currentPlayer.weight) || "-"}
          </ComparisonTableCell>
        </ComparisonTableRow>
      </ComparisonTable>
    </TabContainer>
  );
};

export default ComparisonTab;
