import React, { useState } from "react";
import { TableRow, TableHeader, TableType } from "../../../../../Components";
import { TabContainer } from "./BattingTabStyle";

export interface TableHeaderProps {
  width: string;
}
const playerData = {
  age: 19,
  batter_datraks_id: 419,
  batter_name: "Will Acuff",
  distance: 38.42,
  exit_velocity: 98.41,
  favorite: false,
  launch_angle: 5.98,
  school: { id: "2", name: "FSU" },
  teams: [{ id: "6", name: "Scorps" }],
};
function BattingTab() {
  return (
    <TabContainer>
      <TableHeader type={TableType.batting} />
      <TableRow type={TableType.batting} playerData={playerData} rank="1" />
    </TabContainer>
  );
}

export default BattingTab;
