import { useQuery } from "@apollo/client";
import React from "react";
import Loader from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { LoaderWrapper } from "../../Components";
import { userActions } from "../../Store";
import { queries } from "../User/Profile/Schemas";
import { RouteWrapperProps } from "./RouteWrapper";

const ProfileRouteWrapper: React.FC<RouteWrapperProps> = ({
  Layout,
  Component,
  ...rest
}) => {
  const { loading, error, data } = useQuery(queries.getCurrentProfile);
  const dispatch = useDispatch();

  if (loading) {
    return (
      <LoaderWrapper>
        <Loader type="ThreeDots" color="#fff" height={100} width={100} />
      </LoaderWrapper>
    );
  }
  dispatch(userActions.setData(data.current_profile));
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

export default ProfileRouteWrapper;
