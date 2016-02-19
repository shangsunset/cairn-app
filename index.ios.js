import React, { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';


import App from './client/app';

import configureStore from './client/store/configureStore';


const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('cairn', () => Root);
