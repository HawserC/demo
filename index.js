/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry, StyleSheet} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

type Props = {};
export default class YCY extends Component<Props> {
  render() {
    return (
      <App style={styles.container}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];
console.disableYellowBox = true // 关闭全部黄色警告
AppRegistry.registerComponent(appName, () => YCY);
