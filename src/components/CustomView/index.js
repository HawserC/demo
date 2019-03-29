/**
 * onPress: fn
 * style: Object  非必须
 * title: String
 * numItem: num
 * icon: url
**/
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import comSty from '../../utils/comSty';

export let CustomView = function CustomItem(props) {
  const {key='', onPress, style={}, title='', icon='', numItem=false, right=false, mLeft=0, mTop=1, unread=false} = props;
  // console.log(props, 'props')
  let marginSty = {}
  for(let attr in style) {
    if(attr.startsWith('margin')) {
      marginSty[attr] = style[attr];
      delete style[attr];
    }
  }
  let mLeftSty = { marginLeft: mLeft*comSty.wScale}
  return(
    <TouchableOpacity
      style={[{width: '100%', marginTop: mTop}, marginSty]}
      onPress={onPress}
      key={key ? key : `key${title}`}
      activeOpacity={1}
    >
    {
      right ? 
      <View style={[styles.boxSty, {height: 60*comSty.hScale}, style, mLeftSty]}>
        <Image style={styles.image2} source={icon} resizeMode = "contain"/>
        <View style={styles.view2}>
          <Text style={styles.extra}>{title}</Text>
          <Image style={styles.img_more} source={require("../../../public/images/more.png")} resizeMode = "contain"/>
        </View>
      </View> :
      <View style={[styles.boxSty, style, mLeftSty]}>
        <View style={styles.view}>
          {icon ? <Image style={styles.image} source={icon} resizeMode="contain"/> : <View style={styles.image}/>}
          <Text style={styles.text}>{title}</Text>
          {numItem ? <Text style={[styles.text, {color: '#b5b5b5'}]}>{numItem}</Text> : null}
          {unread ? <View style={styles.unreadSty}/> : null}
        </View>
        <Image source={require("../../../public/images/more.png")} resizeMode = "contain"/>
      </View> 
    }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  boxSty: {
    height: 56*comSty.hScale,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20*comSty.wScale,
  },
  view:{
    width: 120*comSty.wScale,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  view2:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image:{
    width: 17*comSty.wScale,
    height: 21*comSty.hScale,
    marginRight: 20*comSty.wScale
  },
  image2: {
  },
  text:{
   fontSize: 16*comSty.fontScale,
   color: '#ffffff'
  },
  extra:{
    fontSize: 16*comSty.fontScale,
    color: '#b5b5b5'
  },
  img_more: {
    marginLeft: 8*comSty.wScale 
  },
  unreadSty: {
    backgroundColor: '#FF0600',
    width: 10, 
    height: 10, 
    borderRadius: 5,
    marginLeft: 5*comSty.wScale
  }
});
