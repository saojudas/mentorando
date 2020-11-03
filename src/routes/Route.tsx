import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import LandingLayout from '../pages/_layouts/landing';
import DefaultLayout from '../pages/_layouts/layout';

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
  const signed = true;

  if (!signed && isPrivate) {
    <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    <Redirect to="/home" />;
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
