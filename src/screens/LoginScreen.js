import React from "react";
import { View, StyleSheet, Text, ImageBackground, Image,TouchableHighlight,TouchableOpacity  } from "react-native";
import homeData from "../json/home.json";

const LoginScreen = ({ navigation }) => {
  return (
    <ImageBackground style={{ flex: 1 }} source={require('../../assets/bg_all.png')}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.logincardbox}>
          <View style={styles.logincardborderbox}>
            <Image style={styles.ccimlogoStyle} source={require('../../assets/ccimlogo.png')} />
            <Text style={styles.welcomeword}>{homeData.part1}</Text>
              
            <TouchableHighlight onPress={() =>navigation.navigate('首頁') } style={styles.gobutton} underlayColor="#A7050E"> 
              <Text style={styles.goStyle}>Go</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  logincardbox: {
    height: 459,
    width: 320,
    // marginRight: 20,
    // marginLeft: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center"
  },
  logincardborderbox: {
    borderWidth: 1,
    borderColor: "#A7050E",
    height: 443,
    width: 304,
    alignItems: "center"
  },
  ccimlogoStyle: {
    width: 130,
    height: 130,
    marginTop: 24
  },
  welcomeword: {
    color: "#A7050E",
    fontSize: 13,
    height: 102,
    textAlign: "center",
    marginTop: 16,
    lineHeight: 18
  },
  gobutton:{
    width:138,
    height:44,
    backgroundColor:"#FEBC5F",
    borderRadius:22,
    justifyContent:"center",
    alignItems:"center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginTop:22
  },
  goStyle:{
    color:"#fff",
    fontSize:20
  }
});

export default LoginScreen;
