import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { match } from "react-router-dom";
import { BoldArrowIcon, SearchIcon } from "../../../Assets/icons";
import {
  FilterInput,
  FilterSelect,
  SearchInput,
  LoaderWrapper,
  StyledToast,
} from "../../../Components";
import { PlayerDataType } from "../../../Store";
import { playerActions } from "../../../Store/PlayersSlice/PlayerSlice";
import { MatchProps, SelectOptionType } from "../../../Utils";
import { filterPositionOptions, perPageOptions } from "../../../Utils/options";
import TableHeader from "./Components/Table/TableHeader";
import TableRow from "./Components/Table/TableRow";
import {
  FilterWrapper,
  NetworkContainer,
  NetworkFiltersWrapper,
  NetworkHeader,
  NetworkTitle,
  NetworkWrapper,
  PlayerInputWrapper,
  PlayersCount,
  TableContainer,
  TableFilter,
} from "./NetworkStyle";
import "./pagination.css";
import { queries } from "./Schemas";

interface NetworkProps {
  match?: match<MatchProps>;
}
const Network: React.FC<NetworkProps> = ({ match }) => {
  const [perPage, setPerPage] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);
  const [pagesCount, setPagesCount] = useState<number>(0);
  const dispatch = useDispatch();

  const [playerData, setPlayerData] = useState<PlayerDataType[]>();
  const [teamFilter, setTeamFilter] = useState<string>("");
  const [schoolFilter, setSchoolFilter] = useState<string>("");
  const [positionFilter, setPositionFilter] = useState<string>("");
  const [playerNameFilter, setPlayerNameFilter] = useState<string>("");

  const { loading, error, data } = useQuery(queries.getUserList, {
    variables: {
      input: {
        offset: offset,
        profiles_count: perPage,
        school: schoolFilter,
        team: teamFilter,
        player_name: playerNameFilter,
        position: positionFilter,
      },
    },
  });

  useEffect(() => {
    if (!loading) {
      setPagesCount(data.profiles.total_count / perPage);

      if (data) {
        dispatch(playerActions.setData(data.profiles.profiles));
        setPlayerData(data.profiles.profiles);
      }
    }
  }, [data, schoolFilter, teamFilter, playerNameFilter]);
  const handleSetOption = (e: SelectOptionType) => {
    setPerPage(typeof e.value === "number" ? e.value : 10);
  };
  const handleSetPosition = (e: SelectOptionType) => {
    setPositionFilter(e.value.toString());
  };
  if (!playerData) {
    return (
      <LoaderWrapper fullWidth>
        <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
      </LoaderWrapper>
    );
  }

  return (
    <NetworkContainer>
      <NetworkWrapper>
        <NetworkHeader>
          <NetworkTitle>Network</NetworkTitle>
          <NetworkFiltersWrapper>
            <FilterInput
              icon={<BoldArrowIcon />}
              placeholder="Team"
              width="40"
              handleFocus
              onChange={setTeamFilter}
            />
            <FilterWrapper>
              <FilterInput
                icon={<BoldArrowIcon />}
                placeholder="School"
                width="50"
                handleFocus
                onChange={setSchoolFilter}
              />
            </FilterWrapper>
            <FilterSelect
              options={filterPositionOptions}
              onInputChange={handleSetPosition}
              width="120"
              placeholder="Position"
            />
            <FilterSelect
              options={perPageOptions}
              onInputChange={handleSetOption}
              placeholder={`Show ${perPage}`}
              isShouldRenderValue={false}
              width="110"
            />
          </NetworkFiltersWrapper>
        </NetworkHeader>
        <TableFilter>
          <PlayersCount>
            Available Players ({loading ? "..." : data.profiles.total_count})
          </PlayersCount>
          <PlayerInputWrapper>
            <SearchInput
              placeholder="Player Name"
              onChange={setPlayerNameFilter}
            />
          </PlayerInputWrapper>
        </TableFilter>
        <TableHeader />

        {loading ? (
          <LoaderWrapper isChild>
            <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
          </LoaderWrapper>
        ) : (
          <TableContainer>
            {playerData.map((i: PlayerDataType) => {
              return <TableRow playerData={i} key={i.id} />;
            })}
          </TableContainer>
        )}

        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pagesCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={(e) => setOffset(e.selected * perPage)}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </NetworkWrapper>
      <StyledToast>
        <SearchIcon />
      </StyledToast>
    </NetworkContainer>
  );
};

export default Network;
