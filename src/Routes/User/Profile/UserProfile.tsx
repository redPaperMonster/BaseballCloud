import { useQuery } from "@apollo/client";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../../Store";
import { playerActions } from "../../../Store/PlayersSlice/PlayerSlice";
import ProgressItem from "./Components/ProgressItem/ProgressItem";
import { queries } from "./Schemas";
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
interface UserProfileProps {
  params?: any;
}
const UserProfile: React.FC<UserProfileProps> = ({ params }) => {
  let userId = useSelector(userSelector.getUserId());
  const { loading, data } = useQuery(queries.getBattingSummary, {
    variables: { id: (params && params.id) || userId },
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const topValues = data.batting_summary.top_values[0];

  return (
    <div>
      <SummaryEventsWrapper>
        <PitcherSummarySection>
          <CardTitleWrapper>
            <CardTitle>Top Batting Values</CardTitle>
          </CardTitleWrapper>
          <ProgressContainer>
            <ProgressItem
              title="Exit Velocity"
              value={(topValues && topValues.exit_velocity) || "N/A"}
              percent={90}
            />
            <ProgressItem
              title="Carry Distance"
              value={(topValues && topValues.distance) || "N/A"}
              percent={10}
            />
            <ProgressItem
              title="Launch Angle"
              value={(topValues && topValues.launch_angle) || "N/A"}
              percent={30}
            />
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
};

export default UserProfile;
