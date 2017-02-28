import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from './components/app';
import GamesPage from './components/gamesPage';
import FormPage from './components/formPage';
import rootReducer from './rootReducer';

let store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="games" component={GamesPage} />
        <Route path="games/new" component={FormPage} />
        <Route path="game/:_id" component={FormPage} />
      </Route>
    </Router>
  </Provider>
)


ReactDOM.render(router, document.getElementById('root'));
