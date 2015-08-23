require('./stylesheets/style.css');

import React from 'react';
import App from './components/App';

import { createStore } from 'redux'
import squidbuilds from './reducers/squidbuilds'
import * as actions from './actions/squidbuilds'

let store = createStore(squidbuilds);

console.log(store.getState().toJS());

let unsubscribe = store.subscribe(() => {
  console.log(store.getState().toJS());
});

store.dispatch(actions.selectEquipment("Splattershot"));
store.dispatch(actions.selectEquipment("Splattershot Jr."));
store.dispatch(actions.deselectAll());

unsubscribe();

React.render(<App />, document.getElementById('app'));
