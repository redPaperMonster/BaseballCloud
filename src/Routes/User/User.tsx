import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LeaderBoard, UserProfile, Network } from ".";
import { ProfileLayout, UserListLayout } from "../../Layouts";
import RouteWrapper from "../Components/RouteWrapper";
import { UserPaths } from "../routes";
import { queries } from "./Profile/Schemas";
import { useQuery } from "@apollo/client";
import { userActions } from "../../Store";
import { useDispatch } from "react-redux";
import Sidebar from "./Profile/Sidebar/Sidebar";

interface UserRouteProps {}

const UserRoute: React.FC<UserRouteProps> = ({}) => {
  const { loading, error, data } = useQuery(queries.userData);

  const dispatch = useDispatch();

  if (loading) {
    return <h1>LOADING....</h1>;
  }
  dispatch(userActions.setData(data.current_profile));

  return (
    <Router>
      <Switch>
        <RouteWrapper
          path={UserPaths.profile}
          Component={UserProfile}
          Layout={ProfileLayout}
          sidebarChildren={Sidebar}
        />
        <RouteWrapper
          path={UserPaths.leaderBoard}
          Component={LeaderBoard}
          Layout={UserListLayout}
        />
        <RouteWrapper
          path={UserPaths.network}
          Component={Network}
          Layout={UserListLayout}
        />
      </Switch>
    </Router>
  );
};

export default UserRoute;
