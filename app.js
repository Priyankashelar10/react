import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {Route, Router, browserHistory, IndexRoute } from 'react-router';
import HomeContainer from './components/home.container';
import MasterContainer from './components/master.container';
import Login from './components/login.container';
import Dashboard from './components/dashboard.container';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import './styles.scss';

const store = createStore(rootReducer, applyMiddleware(thunk));

var routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={MasterContainer} >
        <Route path='login' component={Login} />
        <Route onEnter={requireAuth}>
          <Route path='dashboard' component={Dashboard} />
          <IndexRoute component={Dashboard} />
        </Route>
      </Route>
    </Router>
  </Provider>
);

function requireAuth(nextState, replace) {
  if (localStorage.getItem('userInfo')===null) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

ReactDOM.render(routes, document.getElementById('root'));
