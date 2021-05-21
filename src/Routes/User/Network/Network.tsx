import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { FilterSelect, FindInput } from "../../../Components";
import { playerSelector } from "../../../Store";
import { playerActions } from "../../../Store/PlayersSlice/PlayerSlice";
import TableHeader from "./Components/Table/TableHeader";
import TableRow from "./Components/Table/TableRow";
import {
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
  const [playerData, setPlayerData] = useState<any>();

  const { loading, error, data } = useQuery(queries.userList, {
    variables: { input: { offset: offset, profiles_count: perPage } },
  });

  const handleSetOption = (e: any) => {
    setPerPage(e.value);
  };
  const players = useSelector(
    playerSelector.getPlayersByOffset(offset, perPage)
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
  }, [data]);

  if (!playerData) return null;

  return (
    <NetworkContainer>
      <NetworkWrapper>
        <NetworkHeader>
          <NetworkTitle>Network</NetworkTitle>
          <NetworkFiltersWrapper>
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
            <FindInput placeholder="Player Name" />
          </PlayerInputWrapper>
        </TableFilter>
        <TableHeader />

        {loading ? (
          <h1>LOADING....</h1>
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
    </NetworkContainer>
  );
}

export default Network;
