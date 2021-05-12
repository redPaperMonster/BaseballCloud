import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import {
  FilterSelect,
  TableHeader,
  TableRow,
  TableType,
  FindInput,
} from "../../../Components";
import {
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
  const perPageOptions = [
    { value: 10, label: "10" },
    { value: 25, label: "25" },
    { value: 50, label: "50" },
  ];
  const { loading, error, data } = useQuery(queries.userList, {
    variables: { input: { offset: offset, profiles_count: perPage } },
  });

  const handleSetOption = (e: any) => {
    setPerPage(e.value);
  };

  useEffect(() => {
    !loading && setPagesCount(data.profiles.total_count / perPage);
  }, [data]);

  return (
    <NetworkWrapper>
      <div
        style={{
          padding: "16px",
        }}
      >
        <NetworkHeader>
          <NetworkTitle>Network</NetworkTitle>
          <NetworkFiltersWrapper>
            <FilterSelect
              options={perPageOptions}
              onInputChange={handleSetOption}
              placeholder={`Show ${perPage}`}
              isShouldRenderValue={false}
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
        <TableHeader type={TableType.network} />

        {loading ? (
          <h1>LOADING....</h1>
        ) : (
          <TableContainer>
            {data.profiles.profiles.map((i: any) => {
              return (
                <TableRow playerData={i} key={i.id} type={TableType.network} />
              );
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
      </div>
    </NetworkWrapper>
  );
}

export default Network;
