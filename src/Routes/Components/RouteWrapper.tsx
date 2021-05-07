import React from "react";
import { Route } from "react-router-dom";

interface RouteWrapperProps {
  Component: React.FC<any>;
  Layout: React.FC<any>;
  path: string;
  sidebarChildren?: React.FC<any>;
  exact?: boolean;
}
const RouteWrapper: React.FC<RouteWrapperProps> = ({
  Component,
  Layout,
  path,
  sidebarChildren,
}) => {
  return (
    <Route
      path={path}
      render={() => (
        <Layout SidebarChildren={sidebarChildren}>
          <Component />
        </Layout>
      )}
    />
  );
};
export default RouteWrapper;
