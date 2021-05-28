import { ComponentType } from "react";
import { Route } from "react-router-dom";

export interface RouteWrapperProps {
  Layout: React.FC;
  Component: ComponentType<any>;
  path: string;
  exact?: boolean;
}
const RouteWrapper: React.FC<RouteWrapperProps> = ({
  Layout,
  Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ ...props }) => {
        return (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

export default RouteWrapper;
