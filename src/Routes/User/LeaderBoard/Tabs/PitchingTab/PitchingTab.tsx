import React, { useState } from "react";
import { TableHeader, TableRow, TableType } from "../../../../../Components";
import { TabContainer } from "./PitchingTabStyle";
export interface TableHeaderProps {
  width: string;
}
const playerData = {
  age: 19,
  favorite: false,
  horizontal_break: null,
  pitch_type: "Fastball",
  pitcher_datraks_id: 413,
  pitcher_name: "Zach Blankenship",
  school: { id: "2", name: "FSU" },
  spin_rate: 2040,
  teams: [{ id: "6", name: "Scorps" }],
  velocity: 81.72,
};
function SessionTab() {
  return (
    <TabContainer>
      <TableHeader type={TableType.pitching} />
      <TableRow playerData={playerData} rank="1" type={TableType.pitching} />
    </TabContainer>
  );
}

export default SessionTab;
