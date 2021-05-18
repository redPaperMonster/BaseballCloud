import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { FilterSelect } from "../../../../../Components";
import { queries } from "../../Schemas";
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
const leadTypeOptions = [
  { value: "pitch_velocity", label: "Pitch Velocity" },
  { value: "spin_rate", label: "Spin Rate" },
];
const PitchingTab: React.FC<PitchingTabProps> = ({}) => {
  const [currentFilter, setCurrentFilter] = useState(leadTypeOptions[0].value);

  const { loading, error, data } = useQuery(queries.getLeaderboardPitching, {
    variables: { input: { type: currentFilter } },
  });
  if (loading) return <h1>LOADING...</h1>;
  return (
    <TabContainer>
      <FilterContainer>
        <FilterWrapper>
          <FilterSelect
            options={leadTypeOptions}
            defaultValue={leadTypeOptions[0]}
            onInputChange={(e: any) => setCurrentFilter(e.value)}
            width="150"
          />
        </FilterWrapper>
      </FilterContainer>
      <TableHeader />
      {data.leaderboard_pitching.leaderboard_pitching.map(
        (item: any, index: string) => {
          return (
            <TableRow
              playerData={item}
              rank={(+index + 1).toString()}
              key={index}
            />
          );
        }
      )}
    </TabContainer>
  );
};

export default PitchingTab;
