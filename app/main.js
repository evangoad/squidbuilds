require('./stylesheets/style.css');

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import squidbuilds from './reducers/squidbuilds';
import Immutable from 'immutable';
import * as UrlState from './services/UrlState';
import { WeaponData } from './constants/Data';

let state = {
  selected: UrlState.get(),
  WeaponData
}

let store = createStore(squidbuilds, Immutable.fromJS(state));

let unsubscribe = store.subscribe(() => {
  UrlState.write(store.getState().get("selected").toJS());
});

let rootElement = document.getElementById('app');

React.render(
  <Provider store={store}>
    { () => <App /> }
  </Provider>,
  rootElement
);
