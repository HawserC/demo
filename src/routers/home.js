import React from "react";
import { StyleSheet, Text } from 'react-native';
import GoBackBtn from '../components/GoBackBtn';
//跳转页面
import Home from "../pages/home/index";
//自定义按钮
// import 

export default {
  home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      const headerBackTitle = null;
      const headerTitle = '🐑村';
      const headerStyle = {borderBottomWidth: 0, borderBottomColor: '#d9d9d9', backgroundColor: '#ffffff'};
      const headerLeft = <GoBackBtn navigation={navigation}/>;
      const headerRight = null;
      return {headerBackTitle, headerStyle, headerRight, headerTitle, headerLeft}
    }
  },
 
};

const styles = StyleSheet.create({
  titleSty: {
    
  },
  paddingR: {
    // paddingRight: isAndroid() ? w(60) : 0
  }
});