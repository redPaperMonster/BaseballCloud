import React from "react";
import { Route } from "react-router-dom";

const RouteWrapper = ({ Layout, Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={({ ...props }) => {
        return Layout ? (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};

export default RouteWrapper;
