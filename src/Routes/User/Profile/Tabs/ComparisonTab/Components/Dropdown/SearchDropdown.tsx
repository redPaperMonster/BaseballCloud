import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { queries } from "../../../../Schemas";
import SearchDropdownItem from "../DropdownItem/SearchDropdownItem";
import { DropdownContainer, DropdownPanel } from "./SearchDropdownStyle";

interface DropdownProps {
  playerName: string;
  userPosition: string;
  isOpened: boolean;
  setIsOpened: any;
  setCurrentPlayer: any;
  setPlayerName: any;
}

const SearchDropdown: React.FC<DropdownProps> = ({
  playerName,
  userPosition,
  setCurrentPlayer,
  setIsOpened,
  setPlayerName,
}) => {
  const { loading, data } = useQuery(queries.getPlayersNames, {
    variables: {
      input: { player_name: playerName || null, position: userPosition },
    },
  });
  const renderDropdown = () => {
    if (data) {
      const dropdownList = data.profile_names.profile_names.map((i: any) => (
        <SearchDropdownItem
          player={i}
          key={i.id}
          setCurrentPlayer={setCurrentPlayer}
          setIsOpened={setIsOpened}
          setPlayerName={setPlayerName}
        />
      ));

      return dropdownList;
    }
  };
  if (loading) {
    return <Loader type="ThreeDots" color="#00BFFF" height={30} width={30} />;
  }
  if (data && data.profile_names && data.profile_names.profile_names[0]) {
    return (
      <DropdownContainer>
        <DropdownPanel>{renderDropdown()}</DropdownPanel>
      </DropdownContainer>
    );
  }
  return null;
};

export default SearchDropdown;
