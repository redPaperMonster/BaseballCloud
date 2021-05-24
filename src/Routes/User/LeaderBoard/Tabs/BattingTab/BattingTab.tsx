import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { FilterSelect, LoaderWrapper } from "../../../../../Components";
import { queries } from "../../Schemas";
import {
  FilterContainer,
  FilterWrapper,
  TabContainer,
} from "./BattingTabStyle";
import TableHeader from "./Components/Table/TableHeader";
import TableRow from "./Components/Table/TableRow";

export interface TableHeaderProps {
  width: string;
}
interface BattingTabProps {}
const leadTypeOptions = [
  { value: "exit_velocity", label: "Exit Velocity" },
  { value: "carry_distance", label: "Carry Distance" },
];
const BattingTab: React.FC<BattingTabProps> = ({}) => {
  const [currentFilter, setCurrentFilter] = useState(leadTypeOptions[0].value);
  const { loading, error, data } = useQuery(queries.getLeaderBoardBatting, {
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
            options={leadTypeOptions}
            defaultValue={leadTypeOptions[0]}
            onInputChange={(e: any) => setCurrentFilter(e.value)}
            width="150"
          />
        </FilterWrapper>
      </FilterContainer>
      <TableHeader />
      {data.leaderboard_batting.leaderboard_batting.map(
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

export default BattingTab;
