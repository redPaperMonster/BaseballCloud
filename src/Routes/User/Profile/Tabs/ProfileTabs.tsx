import React, { useState } from "react";
import { Dropdown, TabButton } from "../../../../Components";
import BattingTab from "./SummaryTab/SummaryTab";
import ComparisonTab from "./ComparisonTab/ComparisonTab";
import {
  DropdownContainer,
  DropdownItem,
  TabList,
  TabPanel,
} from "./ProfileTabStyle";
import SessionTab from "./SessionTab/SessionTab";
import ChartTab from "./ChartTab/ChartTab";
import LogTab from "./LogTab/LogTab";
import { match } from "react-router-dom";
import { MatchProps } from "../../../../Utils";

export interface DropdownStyleProps {
  isDropdownOpened: boolean;
}
interface ProfileTabsProps {
  match?: match<MatchProps>;
}

enum tabs {
  summary,
  session,
  comparison,
  charts,
  log,
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({ match }) => {
  const [currentTab, setCurrentTab] = useState(tabs.summary);
  const [isDropdownOpened, setDropdownOpen] = useState(false);

  const handleChangeTab = () => {
    switch (currentTab) {
      case tabs.summary:
        return <BattingTab />;
      case tabs.session:
        return <SessionTab />;
      case tabs.comparison:
        return <ComparisonTab playerId={match?.params && match?.params?.id} />;
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
            <Dropdown isOpened={isDropdownOpened}>
              <DropdownItem onClick={() => handleDropdownClick(tabs.summary)}>
                Summary
              </DropdownItem>
              <DropdownItem onClick={() => handleDropdownClick(tabs.charts)}>
                Charts
              </DropdownItem>
              <DropdownItem onClick={() => handleDropdownClick(tabs.log)}>
                Log
              </DropdownItem>
            </Dropdown>
          </DropdownContainer>
        </TabButton>

        {!(match?.params && match?.params?.id) && (
          <TabButton
            onClick={() => setCurrentTab(tabs.session)}
            title="Session Reports"
            isActive={currentTab === tabs.session}
          />
        )}
        <TabButton
          onClick={() => setCurrentTab(tabs.comparison)}
          title="Comparison"
          isActive={currentTab === tabs.comparison}
        />
      </TabList>

      <TabPanel>{handleChangeTab()}</TabPanel>
    </div>
  );
};

export default ProfileTabs;
