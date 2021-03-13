import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import LandingLayout from '../pages/_layouts/landing';
import DefaultLayout from '../pages/_layouts/layout';

import { store } from '../store';

interface RouteWrapperProps extends RouteProps {
  landing?: boolean;
  isPrivate?: boolean;
  component: React.FC<RouteProps>;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({
  landing = false,
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/home" />;
  }

  const Layout = landing ? LandingLayout : signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
