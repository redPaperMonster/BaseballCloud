import React from "react";
import { useSelector } from "react-redux";
import { Redirect, RouteComponentProps } from "react-router-dom";
import { userSelector } from "../../Store";
import { AuthPaths, UserPaths } from "../routes";

function authGuard<T extends RouteComponentProps = RouteComponentProps>(
  Component?: React.FC
): React.ComponentType<T> {
  const WrappedComponent: React.FC<T> = (props: T) => {
    const token = useSelector(userSelector.getToken());
    const {
      match: { url },
    } = props;
    if (!Component) {
      return <Redirect to={token ? UserPaths.profile : AuthPaths.login} />;
    }
    if (
      !(
        url === AuthPaths.login ||
        url === AuthPaths.registration ||
        url === AuthPaths.forgotPassword
      ) &&
      !token
    ) {
      return <Redirect to={AuthPaths.login} />;
    }
    if (
      (url === AuthPaths.login ||
        url === AuthPaths.registration ||
        url === AuthPaths.forgotPassword) &&
      token
    ) {
      return <Redirect to={UserPaths.profile} />;
    }

    return <Component {...props} />;
  };
  const componentName = Component && (Component.displayName || Component.name);
  WrappedComponent.displayName = `authGuard(${componentName})`;
  return WrappedComponent;
}

export default authGuard;
