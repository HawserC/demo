import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image, Text, BackHandler } from "react-native";
import comSty from '../../utils/comSty';

export default class GoBackBtn extends Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.affirmEdit);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.affirmEdit);
  }

  affirmEdit = () =>{
    this.props.navigation.goBack(null)
  }

  render(){
    return (
      <TouchableOpacity
        style={styles.btnSty}
        onPress={() =>this.affirmEdit()}
      >
        <Image 
          style={styles.imageSty}
          source={require("../../../public/images/back.png")}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:"#fff",
    },
    btnSty:{
      width: 60*comSty.wScale,
      height: 40*comSty.hScale,
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    imageSty: {
      width: 22*comSty.wScale,
      height: 22*comSty.hScale,
      marginLeft: 15*comSty.wScale,
      marginTop: 5*comSty.hScale
    },
});