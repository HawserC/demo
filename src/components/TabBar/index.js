/**
 * onPress: fn
 * style: Object  
 * title: String
 * numItem: num
 * icon: String
 * selectedIcon: String
 * selected: Boole
**/
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import comSty from '../../utils/comSty';

const TabBarItem = function TabBarItem (props) {
  const { icon='', selectedIcon='', title='', selected=false, onPress=() => console.log('onPress'), } = props;
  console.log(props, 'props')
  return( 
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.tabSty}>
      <View style={styles.viewSty}>
        <Image source={selected ? selectedIcon : icon} style={{marginBottom: 8*comSty.wScale}}/>
        <Text style={{color: selected ? '#00CC7A' : '#666666', fontSize: 13*comSty.fontScale}}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
export class TabBar extends React.PureComponent<{}> {
  static Item = props => <TabBarItem {...props}/>;
  render() {
    const { style={} } = this.props;
    return(
      <View style={[styles.container, style]}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10*comSty.hScale,
    backgroundColor: '#ffffff', 
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  tabSty: {
  },
  viewSty: {
    height: 28*comSty.hScale,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12*comSty.wScale,
    backgroundColor: '#ffffff'
  }
})