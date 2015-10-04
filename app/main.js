require('./stylesheets/style.css');

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import squidbuilds from './reducers/squidbuilds';
import Immutable from 'immutable';
import * as UrlState from './services/UrlState';
import { WeaponData, ShoeData, ClothingData, HeadgearData } from './constants/Data';

let state = {
  selected: UrlState.get(),
  WeaponData,
  ShoeData,
  ClothingData,
  HeadgearData,
};

let store = createStore(squidbuilds, Immutable.fromJS(state));

store.subscribe(() => {
  const selected = store.getState().get('selected').toJS();

  let {
    weapon,
    shoe,
    clothing,
    headgear
  } = selected;

  UrlState.write([weapon, shoe, clothing, headgear]);
});

let rootElement = document.getElementById('app');

React.render(
  <Provider store={store}>
    { () => <App /> }
  </Provider>,
  rootElement
);
