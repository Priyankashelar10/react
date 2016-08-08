import {Route, Router, browserHistory, IndexRoute } from 'react-router';
import React from 'react';
import HomeContainer from './components/home.container';
import MasterContainer from './components/master.container';
import Login from './components/login.container';
import Dashboard from './components/dashboard.container';

export default(
      <Route path='/' component={MasterContainer} >
        <Route path='login' component={Login} />
        <Route onEnter={requireAuth}>
          <Route path='dashboard' component={Dashboard} />
          <IndexRoute component={Dashboard} />
        </Route>
      </Route>
);

function requireAuth(nextState, replace) {
  if (localStorage.getItem('userInfo')===null) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}