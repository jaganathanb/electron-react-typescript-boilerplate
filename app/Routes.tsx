import React from 'react';
import { Route, Switch } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import CounterPage from './containers/CounterPage';
import HomePage from './containers/HomePage';

// eslint-disable-next-line react/display-name
export default () => (
  <App>
    <Switch>
      <Route path={routes.COUNTER} component={CounterPage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
