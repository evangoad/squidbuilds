require('./stylesheets/style.css');

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import App from './components/App';
import squidbuilds from './reducers/squidbuilds'

let store = createStore(squidbuilds);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState().toJS());
});

let rootElement = document.getElementById('app');

React.render(
  <Provider store={store}>
    { () => <App /> }
  </Provider>,
  rootElement
);
