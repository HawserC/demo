/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import dva from './utils/dva';
import Router from './routers';
import container from './models/container';
import NavigationService from "./utils/navigationService";

const app = dva({
  models: [container],
  onError(e) {
    if (__DEV__) console.log('onError', e);
  },
});

const App = app.start(<Router ref={navigatorRef =>NavigationService.setTopLevelNavigator(navigatorRef)}/>);

export default App;



