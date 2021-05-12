import React, { useState } from "react";
import { TabButton } from "../../../../Components";
import BattingTab from "./SummaryTab/SummaryTab";
import ComparisonTab from "./ComparisonTab/ComparisonTab";
import {
  DropdownContainer,
  DropdownItem,
  DropdownPanel,
  TabList,
  TabPanel,
} from "./ProfileTabStyle";
import SessionTab from "./SessionTab/SessionTab";
import ChartTab from "./ChartTab/ChartTab";
import LogTab from "./LogTab/LogTab";

export interface DropdownStyleProps {
  isDropdownOpen: boolean;
}
enum tabs {
  summary,
  session,
  comparison,
  charts,
  log,
}

function ProfileTabs() {
  const [currentTab, setCurrentTab] = useState(tabs.summary);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleChangeTab = () => {
    switch (currentTab) {
      case tabs.summary:
        return <BattingTab />;
      case tabs.session:
        return <SessionTab />;
      case tabs.comparison:
        return <ComparisonTab />;
      case tabs.charts:
        return <ChartTab />;
      case tabs.log:
        return <LogTab />;
    }
  };
  const handleDropdownClick = (tab: tabs) => {
    setCurrentTab(tab);
    setDropdownOpen(false);
  };
  return (
    <div>
      <TabList>
        <TabButton
          onClick={() => setCurrentTab(tabs.summary)}
          title="Batting"
          isActive={currentTab === tabs.summary}
          onMouseOver={() => setDropdownOpen(true)}
          onMouseOut={() => setDropdownOpen(false)}
        >
          <DropdownContainer>
            <DropdownPanel isDropdownOpen={isDropdownOpen}>
              <DropdownItem onClick={() => handleDropdownClick(tabs.summary)}>
                Summary
              </DropdownItem>
              <DropdownItem onClick={() => handleDropdownClick(tabs.charts)}>
                Charts
              </DropdownItem>
              <DropdownItem onClick={() => handleDropdownClick(tabs.log)}>
                Log
              </DropdownItem>
            </DropdownPanel>
          </DropdownContainer>
        </TabButton>

        <TabButton
          onClick={() => setCurrentTab(tabs.session)}
          title="Session Reports"
          isActive={currentTab === tabs.session}
        />
        <TabButton
          onClick={() => setCurrentTab(tabs.comparison)}
          title="Comparison"
          isActive={currentTab === tabs.comparison}
        />
      </TabList>

      <TabPanel>{handleChangeTab()}</TabPanel>
    </div>
  );
}

export default ProfileTabs;
