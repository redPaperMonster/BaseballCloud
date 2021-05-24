import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { BoldArrowIcon, SearchIcon } from "../../../Assets/icons";
import {
  FilterInput,
  FilterSelect,
  FindInput,
  LoaderWrapper,
  StyledToast,
} from "../../../Components";
import { playerSelector } from "../../../Store";
import { playerActions } from "../../../Store/PlayersSlice/PlayerSlice";
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

function Network() {
  const [perPage, setPerPage] = useState(10);
  const [offset, setOffset] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);
  const dispatch = useDispatch();

  const perPageOptions = [
    { value: 10, label: "10" },
    { value: 25, label: "25" },
    { value: 50, label: "50" },
  ];
  const positionOptions = [
    { value: "All", label: "All" },
    { value: "Catcher", label: "Catcher" },
  ];
  const [playerData, setPlayerData] = useState<any>();
  const [teamFilter, setTeamFilter] = useState<string>("");
  const [schoolFilter, setSchoolFilter] = useState<string>("");
  const [playerNameFilter, setPlayerNameFilter] = useState<string>("");

  const { loading, error, data } = useQuery(queries.userList, {
    variables: {
      input: {
        offset: offset,
        profiles_count: perPage,
        school: schoolFilter,
        team: teamFilter,
        player_name: playerNameFilter,
      },
    },
  });

  const handleSetOption = (e: any) => {
    setPerPage(e.value);
  };
  const players = useSelector(
    playerSelector.getPlayersByOffset(
      offset,
      perPage,
      schoolFilter,
      teamFilter,
      playerNameFilter
    )
  );
  useEffect(() => {
    if (!loading) {
      dispatch(playerActions.setData(data.profiles.profiles));
      setPagesCount(data.profiles.total_count / perPage);

      if (data) {
        setPlayerData(data.profiles.profiles);
      }
      if (players.length !== 0) {
        setPlayerData(players);
      }
    }
  }, [data, schoolFilter]);

  if (!playerData) return null;

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
              options={positionOptions}
              onInputChange={() => {}}
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
            <FindInput
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
            {playerData.map((i: any) => {
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
        <div>wow</div>
        <SearchIcon />
      </StyledToast>
    </NetworkContainer>
  );
}

export default Network;
