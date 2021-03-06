import React, { useContext, useState,useEffect } from "react";
import { View, StyleSheet, Text, ImageBackground, Image, TouchableHighlight, TouchableOpacity, TextInput,AsyncStorage } from "react-native";
import homeData from "../json/home.json";
import { StoreContext } from "../stores/progressstore";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {VAR} from "../core/variable";
import FadeInView from "../animation/fadeAnim";
const ME_PERSISTENCE_KEY = "ME_PERSISTENCE_KEY";
const HAS_SET_KEY = "HAS_SET_KEY";

const LoginScreen = ({ navigation }) => {
  const { meState } = useContext(StoreContext);
  const [me, setMe] = meState;
  const saveToAsyncStorage = () => {
    try {
      AsyncStorage.setItem(ME_PERSISTENCE_KEY, JSON.stringify(me));
      AsyncStorage.setItem(HAS_SET_KEY, JSON.stringify(true));
    } catch (error) {
      // Error saving data
    }
  };

  useEffect(() => {
    saveToAsyncStorage();
  }, [me]);

  return (

    <ImageBackground style={{ flex: 1 }} source={require('../../assets/bg_all.png')}>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <KeyboardAwareScrollView>
          <FadeInView style={styles.logincardbox}>

            <View style={styles.logincardborderbox}>
              <Image style={styles.ccimlogoStyle} source={require('../../assets/ccimlogo.png')} />
              <Text style={styles.welcomeword}>{homeData.part11}</Text>
              <View style={styles.input}>
                <Text style={styles.laybel}>&emsp;學號：</Text>
                <View style={styles.inputbox}>
                  <TextInput
                    placeholder="輸入學號"
                    placeholderTextColor="#747474"
                    maxLength={9}
                    style={styles.textbox}
                    value={me.ans}
                    onChangeText={(year) => setMe({ ...me, year })}
                    keyboardType="number-pad"
                  />
                </View>
              </View>

              <View style={styles.input}>
              <Text style={styles.laybel}>&emsp;名稱：</Text>
              <View style={styles.inputbox}>
                <TextInput
                  placeholder="輸入名稱"
                  placeholderTextColor="#747474"
                  maxLength={8}
                  style={styles.textbox}
                  value={me.ans}
                  onChangeText={(name) => setMe({ ...me, name })}
                  autoCorrect={false}
                />
              </View>
              </View>
              

              <TouchableHighlight 
              onPress={() =>{ 
                setMe({...me,loginstate:true});
                if(me.year.length===9)navigation.navigate('首頁');
                else alert("學號格式不正確")
              }} 
              style={styles.gobutton} 
              underlayColor="#A7050E">
                <Text style={styles.goStyle}>Go</Text>
              </TouchableHighlight>
            </View>
          </FadeInView>
        </KeyboardAwareScrollView>
      </View>

    </ImageBackground>

  );
};
const styles = StyleSheet.create({
  logincardbox: {
    height: 479,
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
    borderColor: VAR.MAIN_COLOR,
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: "30%",

  },
  logincardborderbox: {
    borderWidth: 1,
    borderColor: VAR.MAIN_COLOR,
    height: 463,
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
    color: VAR.MAIN_COLOR,
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
    backgroundColor: VAR.BUTTON_COLOR_SELECTED,
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
    width: 150,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#707070",
    // marginTop: 18
  },
  textbox: {
    fontSize: 13,
    textAlign: "center",
    width: 138,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    marginTop:18
  },
  laybel: {
    justifyContent: "center",
    fontSize: 13,
  }
});

export default LoginScreen;
