import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { FilterSelect, LoaderWrapper } from "../../../../../Components";
import { battingLeadTypeOptions, SelectOptionType } from "../../../../../Utils";
import { queries } from "../../Schemas";
import { BatterDataType } from "../../Utils/types";
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

const BattingTab: React.FC<BattingTabProps> = ({}) => {
  const [currentFilter, setCurrentFilter] = useState(
    battingLeadTypeOptions.find(() => true)?.value
  );
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
            options={battingLeadTypeOptions}
            defaultValue={battingLeadTypeOptions.find(() => true)}
            onInputChange={(e: SelectOptionType) =>
              setCurrentFilter(e.value.toString())
            }
            width="150"
          />
        </FilterWrapper>
      </FilterContainer>
      <TableHeader />
      {data.leaderboard_batting.leaderboard_batting.map(
        (item: BatterDataType, index: number) => {
          return <TableRow playerData={item} rank={++index} key={index} />;
        }
      )}
    </TabContainer>
  );
};

export default BattingTab;
