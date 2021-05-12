import { useQuery } from "@apollo/client";
import React from "react";
import ProgressItem from "./Components/ProgressItem/ProgressItem";

import { queries } from "./Schemas/index";
import ProfileTabs from "./Tabs/ProfileTabs";
import {
  CardText,
  CardTitle,
  CardTitleWrapper,
  PitcherSummarySection,
  ProgressContainer,
  RecentEventsSection,
  SummaryEventsWrapper,
  TabsSection,
} from "./UserProfileStyle";

function UserProfile() {
  return (
    <div>
      <SummaryEventsWrapper>
        <PitcherSummarySection>
          <CardTitleWrapper>
            <CardTitle>Top Batting Values</CardTitle>
          </CardTitleWrapper>
          <ProgressContainer>
            <ProgressItem title="Exit Velocity" value="N/A" percent={90} />
            <ProgressItem title="Carry Distance" value="N/A" percent={10} />
            <ProgressItem title="Launch Angle" value="N/A" percent={30} />
          </ProgressContainer>
        </PitcherSummarySection>
        <RecentEventsSection>
          <CardTitleWrapper>
            <CardTitle>Recent Session Reports</CardTitle>
            <CardText>No data currently linked to this profile</CardText>
          </CardTitleWrapper>
        </RecentEventsSection>
      </SummaryEventsWrapper>
      <TabsSection>
        <ProfileTabs />
      </TabsSection>
    </div>
  );
}

export default UserProfile;
