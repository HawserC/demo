import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { CustomView } from '../../components';

export default class Home extends Component{
  render() {
    return (
      <ImageBackground 
        style={styles.container}
        source={require('../../../public/images/ccyy.jpeg')}
      >
        <CustomView
          style={{backgroundColor: 'transparent'}}
          title={'🐑村大门'}
          onPress={() => console.log('ok')}
        />
        <CustomView
          style={{backgroundColor: 'transparent'}}
          title={'🐑村东门'}
          onPress={() => console.log('ok')}
        />
        <CustomView
          style={{backgroundColor: 'transparent'}}
          title={'🐑村西门'}
          onPress={() => console.log('ok')}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});