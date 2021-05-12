import React from "react";
import { Route } from "react-router-dom";

interface RouteWrapperProps {
  Component: React.FC<any>;
  Layout: React.FC<any>;
  path: string;
  Sidebar?: React.FC<any>;
  exact?: boolean;
}
const RouteWrapper: React.FC<RouteWrapperProps> = ({
  Component,
  Layout,
  path,
  Sidebar,
  exact,
}) => {
  return (
    //function return some layout
    <Route
      exact={exact}
      path={path}
      render={(props) => (
        <Layout Sidebar={Sidebar}>
          <Component />
        </Layout>
      )}
    />
  );
};
export default RouteWrapper;
