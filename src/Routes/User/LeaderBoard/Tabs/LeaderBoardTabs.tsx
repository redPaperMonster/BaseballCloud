import React, { useState } from "react";
import { TabButton } from "../../../../Components";
import BattingTab from "./BattingTab/BattingTab";
import { TabList, TabPanel } from "./LeaderBoardTabsStyle";
import PitchingTab from "./PitchingTab/PitchingTab";

enum tabs {
  batting,
  pitching,
}

function LeaderBoardTabs() {
  const [currentTab, setCurrentTab] = useState(tabs.batting);

  const handleChangeTab = () => {
    switch (currentTab) {
      case tabs.batting:
        return <BattingTab />;
      case tabs.pitching:
        return <PitchingTab />;
    }
  };

  return (
    <div>
      <TabList>
        <TabButton
          onClick={() => setCurrentTab(tabs.batting)}
          title="Batting"
          isActive={currentTab === tabs.batting}
        />
        <TabButton
          onClick={() => setCurrentTab(tabs.pitching)}
          title="Pitching"
          isActive={currentTab === tabs.pitching}
        />
      </TabList>

      <TabPanel>{handleChangeTab()}</TabPanel>
    </div>
  );
}

export default LeaderBoardTabs;
