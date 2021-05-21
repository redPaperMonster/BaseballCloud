import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RouteWrapper, { LayoutType } from "../Components/RouteWrapper";
import { UserPaths } from "../routes";
import { queries } from "./Profile/Schemas";
import { useQuery } from "@apollo/client";
import { userActions } from "../../Store";
import { useDispatch } from "react-redux";
import { fetchAPI } from "../../APIService";
import { ProfileLayout, UserListLayout } from "../../Layouts";
import UserProfile from "./Profile/UserProfile";
import { LeaderBoard, Network } from ".";

interface UserRouteProps {}

const UserRoute: React.FC<UserRouteProps> = ({}) => {
  const validateToken = async () => {
    await fetchAPI.validateToken();
  };
  useEffect(() => {
    validateToken().then((res) => console.log(`res`, res));
  }, []);
  const { loading, error, data } = useQuery(queries.getCurrentProfile);

  const dispatch = useDispatch();

  if (loading) {
    return <h1>LOADING....</h1>;
  }

  dispatch(userActions.setData(data.current_profile));
  return (
    <Router>
      <RouteWrapper
        exact
        path={UserPaths.profile}
        Layout={ProfileLayout}
        Component={UserProfile}
      />
      <RouteWrapper
        path={UserPaths.leaderBoard}
        Layout={UserListLayout}
        Component={LeaderBoard}
      />
      <RouteWrapper
        path={UserPaths.network}
        Layout={UserListLayout}
        Component={Network}
      />
      <RouteWrapper
        exact
        path={UserPaths.playerProfile}
        Layout={ProfileLayout}
        Component={UserProfile}
      />
    </Router>
  );
};

export default UserRoute;
