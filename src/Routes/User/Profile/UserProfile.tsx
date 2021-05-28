import { useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { match } from "react-router-dom";
import { LoaderWrapper } from "../../../Components";
import { userActions, userSelector } from "../../../Store";
import { MatchProps } from "../../../Utils";
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
  match?: match<MatchProps>;
}
const UserProfile: React.FC<UserProfileProps> = ({ match }) => {
  let userId = useSelector(userSelector.getUserId());
  const [getBatting, batting] = useLazyQuery(queries.getBattingSummary, {
    variables: { id: (match?.params && match?.params?.id) || userId },
  });
  const { loading, error, data } = useQuery(queries.getCurrentProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.current_profile) {
      getBatting();
      dispatch(userActions.setData(data.current_profile));
    }
  }, [data?.current_profile]);
  if (loading) {
    return (
      <LoaderWrapper>
        <Loader type="ThreeDots" color="#fff" height={100} width={100} />
      </LoaderWrapper>
    );
  }
  const topValues = data.batting_summary?.top_values.find(() => true);
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
        <ProfileTabs match={match} />
      </TabsSection>
    </div>
  );
};

export default UserProfile;
