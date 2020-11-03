import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';

import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Meet from '../pages/Meet';
import Report from '../pages/Report';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} landing />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/home" component={Home} />
      <Route path="/meet" component={Meet} />
      <Route path="/report" component={Report} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
