require('./stylesheets/style.css');

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import squidbuilds from './reducers/squidbuilds';
import Immutable from 'immutable';
import * as UrlState from './services/UrlState';
import { WeaponData, ShoeData, ClothingData } from './constants/Data';

let state = {
  selected: UrlState.get(),
  WeaponData,
  ShoeData,
  ClothingData
};

let store = createStore(squidbuilds, Immutable.fromJS(state));

store.subscribe(() => {
  const selected = store.getState().get('selected').toJS();

  let {
    weapon,
    shoe,
    clothing
  } = selected;

  UrlState.write([weapon, shoe, clothing]);
});

let rootElement = document.getElementById('app');

React.render(
  <Provider store={store}>
    { () => <App /> }
  </Provider>,
  rootElement
);
