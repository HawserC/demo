import React from "react";
import {StyleSheet, Text} from 'react-native';
//跳转页面
import Container from "../pages/container/index";
//自定义按钮

export default {
  container: {
    screen: Container,
    navigationOptions: ({navigation}) => {
      const headerBackTitle = null;
      const headerTitle = '🐑村';
      const headerStyle = {borderBottomWidth: 0, borderBottomColor: '#d9d9d9', backgroundColor: '#ffffff'};
      const headerLeft = null;
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