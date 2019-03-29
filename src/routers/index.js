import React from "react";
import {createStackNavigator, createSwitchNavigator} from "react-navigation";
import container from './container'; //bar路由
import home from './home'; //首页路由

const AppStack = createStackNavigator(
  {
    ...container,
    ...home
  },
  {
    initialRouteName: "container",
    // 禁用侧滑
    navigationOptions: {
      // gesturesEnabled: false
    }
 }
);

export default createSwitchNavigator(
  {
    App: AppStack,
  },
  {
    initialRouteName: 'App',
  }
);


