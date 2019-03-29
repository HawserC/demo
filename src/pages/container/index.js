import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {TabBar, CustomView} from '../../components';

export default class Container extends Component{
  state = {
    selectedTab: '首页'
  }

  onChangeTab = (selectedTab='首页') => {
    this.setState({selectedTab})
  }

  render() {
    const { navigation } = this.props;
    const { selectedTab } = this.state;
    return (
      <ImageBackground 
        style={styles.container}
        source={require('../../../public/images/ycy_miumiu.jpg')}
      >
        <CustomView
          style={{backgroundColor: 'transparent'}}
          title={'🐑村入口'}
          onPress={() => navigation.navigate('home')}
        />
        <TabBar>
          <TabBar.Item
            icon={require('../../../public/images/all.png')}
            selectedIcon={require('../../../public/images/all_.png')}
            title='首页'
            selected={ selectedTab === '首页'}
            onPress={() => {
              this.onChangeTab('首页') 
            }}
          />
          <TabBar.Item
            icon={require('../../../public/images/all.png')}
            selectedIcon={require('../../../public/images/all_.png')}
            title='我的'
            selected={ selectedTab === '我的'}
            onPress={() => {
              this.onChangeTab('我的') 
            }}
          />
        </TabBar>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  line3: {
    height: 3,
  }
});