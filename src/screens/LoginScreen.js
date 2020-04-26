import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, ImageBackground, Image, TouchableHighlight, TouchableOpacity, TextInput } from "react-native";
import homeData from "../json/home.json";
import { StoreContext } from "../stores/progressstore";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const LoginScreen = ({ navigation }) => {
  const { meState } = useContext(StoreContext);
  const [me, setMe] = meState;
  return (

    <ImageBackground style={{ flex: 1 }} source={require('../../assets/bg_all.png')}>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <KeyboardAwareScrollView>
          <View style={styles.logincardbox}>

            <View style={styles.logincardborderbox}>
              <Image style={styles.ccimlogoStyle} source={require('../../assets/ccimlogo.png')} />
              <Text style={styles.welcomeword}>{homeData.part11}</Text>

              <View style={styles.inputbox}>

                <TextInput
                  placeholder="請輸入名稱"
                  placeholderTextColor="#747474"
                  maxLength={10}
                  style={styles.textbox}
                  value={me.ans}
                  onChangeText={(name) => setMe({ ...me, name })}
                />
              </View>

              <TouchableHighlight onPress={() => navigation.navigate('首頁')} style={styles.gobutton} underlayColor="#A7050E">
                <Text style={styles.goStyle}>Go</Text>
              </TouchableHighlight>
            </View>
          </View>
        </KeyboardAwareScrollView>
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
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: "30%",

  },
  logincardborderbox: {
    borderWidth: 1,
    borderColor: "#A7050E",
    height: 443,
    width: 304,
    alignItems: "center",
    margin: 7,
  },
  ccimlogoStyle: {
    width: 130,
    height: 130,
    marginTop: 26
  },
  welcomeword: {
    color: "#A7050E",
    fontSize: 13,
    height: 102,
    textAlign: "center",
    marginTop: 16,
    lineHeight: 18,
    // backgroundColor:"#000"
  },
  gobutton: {
    width: 138,
    height: 44,
    backgroundColor: "#FEBC5F",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginTop: 26
  },
  goStyle: {
    color: "#fff",
    fontSize: 20
  },
  inputbox: {
    width: 138,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#707070",
    marginTop: 18
  },
  textbox: {
    fontSize: 16,
    textAlign: "center",
    width:138
  }
});

export default LoginScreen;
