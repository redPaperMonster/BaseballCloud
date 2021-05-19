import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RouteWrapper, { LayoutType } from "../Components/RouteWrapper";
import { UserPaths } from "../routes";
import { queries } from "./Profile/Schemas";
import { useQuery } from "@apollo/client";
import { userActions } from "../../Store";
import { useDispatch } from "react-redux";
import { fetchAPI } from "../../APIService";

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
        path={UserPaths.profile}
        layoutType={LayoutType.userProfile}
      />
      <RouteWrapper
        path={UserPaths.playerProfile}
        layoutType={LayoutType.playerProfile}
      />
      <RouteWrapper
        path={UserPaths.leaderBoard}
        layoutType={LayoutType.leaderBoard}
      />
      <RouteWrapper path={UserPaths.network} layoutType={LayoutType.network} />
    </Router>
  );
};

export default UserRoute;
