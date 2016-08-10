import {Route, Router, browserHistory, IndexRoute } from 'react-router';
import React from 'react';
import UserProfileView from './components/userProfile';
import MasterContainer from './components/master.container';
import Login from './components/login/login.container';
import Dashboard from './components/dashboard/dashboard.container';

export default(
      <Route path='/' component={MasterContainer} >
        <Route path='login' component={Login} />
        <Route onEnter={requireAuth}>
          <Route path='dashboard' component={Dashboard} />
          <Route path='userProfile' component={UserProfileView} />
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