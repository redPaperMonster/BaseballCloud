import React from "react";
import { Route } from "react-router-dom";

interface RouteWrapperProps {
  Component: React.FC<any>;
  Layout: React.FC<any>;
  path: string;
  Sidebar?: React.FC<any>;
}
const RouteWrapper: React.FC<RouteWrapperProps> = ({
  Component,
  Layout,
  path,
  Sidebar,
}) => {
  return (
    <Route
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
