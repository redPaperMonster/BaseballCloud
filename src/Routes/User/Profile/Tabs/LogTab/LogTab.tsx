import React, { useState } from "react";
import { FilterSelect, SearchInput } from "../../../../../Components";
import { logOptions } from "../../../../../Utils/options";
import LogTableRow from "./Components/LagTableRow/LogTableRow";
import LogTableHeader from "./Components/LogTableHeader/LogTableHeader";
import {
  LogHeader,
  LogTable,
  LogTitle,
  TabContainer,
  TableContainer,
} from "./LogTabStyle";

function LogTab() {
  return (
    <TabContainer>
      <LogHeader>
        <SearchInput placeholder="Search" onChange={() => {}} />
        <FilterSelect
          width="120"
          options={logOptions}
          onInputChange={() => {}}
          placeholder="Pitch Type"
        />
      </LogHeader>
      <LogTitle>Batting Log</LogTitle>
      <TableContainer>
        <LogTableHeader />
        <LogTable>
          <LogTableRow />
          <LogTableRow />
          <LogTableRow />
          <LogTableRow />
        </LogTable>
      </TableContainer>
    </TabContainer>
  );
}

export default LogTab;
