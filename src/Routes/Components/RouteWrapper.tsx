import React from "react";
import { Route } from "react-router-dom";

interface RouteWrapperProps {
  Component: React.FC<any>;
  Layout: React.FC<any>;
  path: string;
}
const RouteWrapper: React.FC<RouteWrapperProps> = ({
  Component,
  Layout,
  path,
}) => {
  return (
    <Route
      path={path}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};
export default RouteWrapper;
