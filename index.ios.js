import React, { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';


import App from './src/app';

/* import configureStore from './store/configure-store'; */


/* const store = configureStore(); */


const Root = () => (
  <Provider>
    <App />
  </Provider>
);

AppRegistry.registerComponent('cairn', () => Root);
