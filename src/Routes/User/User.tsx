import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LeaderBoard, UserProfile } from ".";
import { UserPaths } from "../routes";

interface UserRouteProps {}

const UserRoute: React.FC<UserRouteProps> = ({}) => {
  return (
    <Router>
      <Switch>
        <Route exact path={UserPaths.profile} component={UserProfile}></Route>
        <Route path={UserPaths.leaderBoard} component={LeaderBoard}></Route>
      </Switch>
    </Router>
  );
};

export default UserRoute;
