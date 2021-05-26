import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { FilterSelect, LoaderWrapper } from "../../../../../Components";
import {
  SelectOptionType,
  pitchingLeadTypeOptions,
} from "../../../../../Utils";
import { queries } from "../../Schemas";
import { PitchingDataType } from "../../Utils/types";
import TableHeader from "./Components/Table/TableHeader";
import TableRow from "./Components/Table/TableRow";
import {
  FilterContainer,
  FilterWrapper,
  TabContainer,
} from "./PitchingTabStyle";

export interface TableHeaderProps {
  width: string;
}
interface PitchingTabProps {}

const PitchingTab: React.FC<PitchingTabProps> = ({}) => {
  const [currentFilter, setCurrentFilter] = useState(
    pitchingLeadTypeOptions[0].value
  );
  const { loading, error, data } = useQuery(queries.getLeaderboardPitching, {
    variables: { input: { type: currentFilter } },
  });
  if (loading)
    return (
      <LoaderWrapper>
        <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
      </LoaderWrapper>
    );
  return (
    <TabContainer>
      <FilterContainer>
        <FilterWrapper>
          <FilterSelect
            options={pitchingLeadTypeOptions}
            defaultValue={pitchingLeadTypeOptions[0]}
            onInputChange={(e: SelectOptionType) => {
              setCurrentFilter(
                typeof e.value === "string" ? e.value : e.value.toString()
              );
            }}
            width="150"
          />
        </FilterWrapper>
      </FilterContainer>
      <TableHeader />
      {data.leaderboard_pitching.leaderboard_pitching.map(
        (item: PitchingDataType, index: number) => {
          return <TableRow playerData={item} rank={++index} key={index} />;
        }
      )}
    </TabContainer>
  );
};

export default PitchingTab;
