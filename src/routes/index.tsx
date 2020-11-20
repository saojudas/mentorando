import React from 'react';
import { Router, Switch } from 'react-router-dom';
import Route from './Route';

import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import NewMeet from '../pages/NewMeet';
import Report from '../pages/Report';

import history from '../services/history';

const Routes: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Landing} landing />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/home" component={Home} isPrivate />
      <Route path="/meet" component={NewMeet} isPrivate />
      <Route path="/report" component={Report} isPrivate />
    </Switch>
  </Router>
);

export default Routes;
