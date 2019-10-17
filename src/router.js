import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login from './modules/home/views/Login';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login}/>
      </Switch>
    </Router>
  )
}
export default RouterConfig;
