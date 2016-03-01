import React, { AppRegistry, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';


import App from './client/containers/AppContainer';

import configureStore from './client/store/configureStore';


const store = configureStore();

// AsyncStorage.getItem('token').then(token => {
//
//   if (token) {
//
//     store.dispatch(loginSuccess(token));
//   }
// });

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('cairn', () => Root);
