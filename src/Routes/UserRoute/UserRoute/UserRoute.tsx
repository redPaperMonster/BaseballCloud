import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LeaderBoard, UserProfile } from "../";

interface UserRouteProps {}

const UserRoute: React.FC<UserRouteProps> = ({}) => {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Switch>
        <Route exact path="/profile">
          <UserProfile />
        </Route>
        <Route path="/leaderboard">
          <LeaderBoard />
        </Route>
      </Switch>
    </Router>
  );
};

export default UserRoute;
