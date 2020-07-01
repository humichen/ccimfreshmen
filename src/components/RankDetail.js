import React, { useState,useContext} from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { VAR } from "../core/variable";
import { StoreContext } from "../stores/progressstore";

const Header = ({ rank,num, navigation }) => {
  const order=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
  const { ordernumState } = useContext(StoreContext);
  const [ordernum,setordernum]=ordernumState;
  // console.log(rank.name);
  // console.log(rank.order);
  // console.log(ordernum);
  return (
      <View style={styles.rankimgbox}>
        <ImageBackground style={{ flex: 1,width:255,height:30}} source={require('../../assets/bg_rankbox.png')}>
          <View style={styles.rankboxStyle}>
            {/* <Text style={styles.orderStyle}>{rank.order}</Text> */}
            <Text style={styles.orderStyle}>{rank.order}</Text>
            <Text style={styles.nameStyle}>{rank.name}</Text>
            {/* <Text style={styles.nameStyle}>123</Text> */}
          </View>

        </ImageBackground>

      </View>
  );
};
const styles = StyleSheet.create({
  rankimgbox: {
    width: 255,
    height: 30,
    marginBottom: 12,
    // backgroundColor:"blue"
  },
  rankboxStyle: {
    width: 255,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor:"red"
  },
  orderStyle: {
    marginLeft: 15,
    fontSize: 14,
    color: "#fff",
    height: 18,
    width: 16,
    lineHeight: 18,
    // backgroundColor:"blue"
  },
  nameStyle: {
    width: 139,
    height: 18,
    fontSize: 14,
    color: "#000",
    lineHeight: 18,
    marginLeft: 42,
    textAlign: "center",
    // backgroundColor:"green",
    // backgroundColor:"blue"
  }
});

export default Header;
