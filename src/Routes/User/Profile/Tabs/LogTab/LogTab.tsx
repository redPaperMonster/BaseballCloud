import React, { useState } from "react";
import { FilterSelect, FindInput } from "../../../../../Components";
import LogTableRow from "./Components/LagTableRow/LogTableRow";
import LogTableHeader from "./Components/LogTableHeader/LogTableHeader";
import {
  LogHeader,
  LogTable,
  LogTitle,
  TabContainer,
  TableContainer,
} from "./LogTabStyle";

const logOptions = [
  { value: "1", label: "None" },
  { value: "2", label: "Four Seam Fastball" },
  { value: "3", label: "Slider" },
];
function LogTab() {
  return (
    <TabContainer>
      <LogHeader>
        <FindInput placeholder="Search" />
        <FilterSelect
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
