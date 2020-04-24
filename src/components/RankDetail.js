import React from "react";
import { StyleSheet, Text, View,ImageBackground } from "react-native";

const Header = ({rank,navigation}) => {
  return (
      <View style={styles.rankimgbox}>
        <ImageBackground style={{ flex: 1,width:255,height:30}} source={require('../../assets/bg_rankbox.png')}>
          <View style={styles.rankboxStyle}>
            <Text style={styles.orderStyle}>{rank.order}</Text>
            <Text style={styles.nameStyle}>{rank.name}</Text>
          </View>
         
        </ImageBackground>
        
      </View>
  );
};

const styles = StyleSheet.create({
  rankimgbox:{
    width:255,
    height:30,
    marginBottom:12

  },
  rankboxStyle:{
    width:255,
    height:30,
    flexDirection:"row",
    alignItems:"center"
  },
  orderStyle:{
    marginLeft:15,
    fontSize:14,
    color:"#fff",
    height:18,
    width:16,
    lineHeight:18
  },
  nameStyle:{
    width:139,
    height:18,
    color:"#000",
    lineHeight:18,
    marginLeft:42,
    textAlign:"center",
    // backgroundColor:"green"
  }
});

export default Header;
