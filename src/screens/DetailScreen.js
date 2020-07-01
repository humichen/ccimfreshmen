import React, { useContext, useState, useEffect } from "react";
import * as firebase from "firebase";
import { ScrollView, Linking, Text, Image, StyleSheet, ImageBackground, View, StatusBar, TextInput, TouchableHighlight, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Input } from "react-native-elements";
import { StoreContext } from "../stores/progressstore";
import { VAR } from "../core/variable"
import FadeInView from "../animation/fadeAnim"
const ME_PERSISTENCE_KEY = "ME_PERSISTENCE_KEY";
const HAS_SET_KEY = "HAS_SET_KEY";

const DetailScreen = ({ navigation, route }) => {
  const { title,
    bgimage,
    recimage,
    description,
    hint,
    laybel,
    ans,
    array,
    from
  } = route.params;
  const { meState} = useContext(StoreContext);
  const [me, setMe] = meState;
  let answerStateArray = [me._0, me._1, me._2, me._3, me._4, me._5, me._6, me._7, me._8, me._9, me._10, me._11]
  const [submit, setsubmit] = useState(false);
  const [changepage, setchangepage] = useState(0);

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

  var showstate = "";
  var showstate1 = ""
  if (answerStateArray[array] === false) {
    showstate = "flex";
    showstate1 = "none"
    if (submit === true) {
      showstate = "none";
      showstate1 = "flex";
    }
  } else {
    showstate = "none";
    showstate1 = "flex";
  }

  return (

    <ImageBackground style={{ flex: 1 }} source={require('../../assets/bg_all.png')}>
      <KeyboardAwareScrollView>
        <Image style={styles.imgrecStyle} source={{ uri: recimage }} />

        <FadeInView style={styles.cardContainerStyle}>
          <View style={styles.introductionbox}>
            <View style={styles.introductiontitlebox}>
              <ImageBackground style={{ flex: 1, width: 156, height: 25, marginBottom: 0 }} source={require('../../assets/bg_introduction.png')}>
                <View style={styles.titlebox}>
                  <Text style={styles.introductiontitle}>{title}說明</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.descriptionbox}>
              <Text style={styles.descriptionStyle}>&emsp;&emsp;{description}</Text>
            </View>
          </View>
          <View style={styles.hintbox}>
            <View style={styles.hintmark}></View>
            <View style={styles.hintwordbox}>
              <Text style={styles.hintword}>{hint}</Text>
            </View>
          </View>
          <View style={styles.answerbox}>
            <Text style={{ color: "#fff", fontSize: 16, display: showstate1, width: "45%", textAlign: "right" }}>任務已完成</Text>
            <View style={[styles.inputbox, { display: showstate }]}>
              <TextInput
                // laybel=" "
                // labelStyle={{ color:"#fff" }}
                placeholder={laybel}
                placeholderTextColor="#fff"
                style={styles.textbox}
                value={me.answer}
                onChangeText={(answer) => setMe({ ...me, answer, changestage: 0 })}
              />
            </View>
            <View style={styles.submitbox}>
              <TouchableHighlight style={[styles.submit, { display: showstate }]}
                onPress={() => {
                  if (me.answer === ans) {
                    setsubmit(true);
                    answerStateArray[array] = true;
                    if (array < 8) {

                      if (answerStateArray[0] && answerStateArray[1] && answerStateArray[2] && answerStateArray[3] && answerStateArray[4] && answerStateArray[5] && answerStateArray[6] && answerStateArray[7] && answerStateArray[8] && answerStateArray[9] && answerStateArray[10] && answerStateArray[11]) {
                        //if (answerStateArray[0] && answerStateArray[4]) {
                        setMe({ ...me, answer: null, completed: true, changestage: 0, _0: answerStateArray[0], _1: answerStateArray[1], _2: answerStateArray[2], _3: answerStateArray[3], _4: answerStateArray[4], _5: answerStateArray[5], _6: answerStateArray[6], _7: answerStateArray[7], _8: answerStateArray[8], _9: answerStateArray[9], _10: answerStateArray[10], _11: answerStateArray[11], locationbar: (me.locationrightans + 1) / 8, locationrightans: me.locationrightans + 1 });
                        firebase.database().ref(parseInt(me.year / 100000) - 1000).child(me.year).set(
                          {
                            "name": me.name,
                            "timeStamp": Date.now()
                          })
                        navigation.navigate(from);
                        navigation.navigate('排行榜');
                        alert(
                          "回答正確",
                        )
                      } else {
                        setMe({ ...me, answer: null, _0: answerStateArray[0], _1: answerStateArray[1], _2: answerStateArray[2], _3: answerStateArray[3], _4: answerStateArray[4], _5: answerStateArray[5], _6: answerStateArray[6], _7: answerStateArray[7], _8: answerStateArray[8], _9: answerStateArray[9], _10: answerStateArray[10], _11: answerStateArray[11], locationbar: (me.locationrightans + 1) / 8, locationrightans: me.locationrightans + 1 });
                        alert(
                          "回答正確",
                        )
                      }

                    }
                    else {
                      if (answerStateArray[0] && answerStateArray[1] && answerStateArray[2] && answerStateArray[3] && answerStateArray[4] && answerStateArray[5] && answerStateArray[6] && answerStateArray[7] && answerStateArray[8] && answerStateArray[9] && answerStateArray[10] && answerStateArray[11]) {
                        setMe({ ...me, answer: null, completed: true, changestage: 0, _0: answerStateArray[0], _1: answerStateArray[1], _2: answerStateArray[2], _3: answerStateArray[3], _4: answerStateArray[4], _5: answerStateArray[5], _6: answerStateArray[6], _7: answerStateArray[7], _8: answerStateArray[8], _9: answerStateArray[9], _10: answerStateArray[10], _11: answerStateArray[11], contactbar: (me.contactrightans + 1) / 4, contactrightans: me.contactrightans + 1 });
                        firebase.database().ref(parseInt(me.year/100000)-1000).child(me.year).set(
                          {
                          "name":me.name,
                          "timeStamp": Date.now()
                        })
                        navigation.navigate('排行榜');
                        alert(
                          "回答正確",
                        )
                      } else {
                        setMe({ ...me, answer: null, _0: answerStateArray[0], _1: answerStateArray[1], _2: answerStateArray[2], _3: answerStateArray[3], _4: answerStateArray[4], _5: answerStateArray[5], _6: answerStateArray[6], _7: answerStateArray[7], _8: answerStateArray[8], _9: answerStateArray[9], _10: answerStateArray[10], _11: answerStateArray[11], contactbar: (me.contactrightans + 1) / 4, contactrightans: me.contactrightans + 1 });
                        alert(
                          "回答正確",
                        )
                      }

                    }
                  }
                  else {
                    alert(
                      "回答錯誤",
                    )
                    setMe({ ...me, answer: null });
                  }
                }}
                activeOpacity={0.6}
                underlayColor={"#6C1B1F"}
              >
                <Text style={styles.submittext}>送出</Text>
              </TouchableHighlight>
            </View>


          </View>

        </FadeInView>
      </KeyboardAwareScrollView>
      <View style={styles.bottom}></View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  imgrecStyle: {
    height: 200,
    backgroundColor: VAR.BUTTON_COLOR
  },
  cardContainerStyle: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: VAR.MAIN_MARGIN_LEFT,
    marginRight: VAR.MAIN_MARGIN_RIGHT,
    marginTop: 23,
  },
  introductionbox: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    height: 146
  },
  introductiontitlebox: {
    height: 25
  },
  titlebox: {
    width: 156,
    height: 25,
    flexDirection: "column",
    justifyContent: "center",
  },
  introductiontitle: {
    color: "#fff",
    marginTop: 4,
    marginLeft: 14,
    fontSize: 13,
    height: 18,
  },
  descriptionbox: {
    marginTop: 4,
    marginLeft: 14,
    marginRight: 10,
    height: 110,
    justifyContent: "center"
  },
  descriptionStyle: {
    color: "#707070",
    fontSize: 13,
    lineHeight: 17
  },
  hintbox: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    height: 48,
    marginTop: VAR.MAIN_MARGIN_TOP,
    flexDirection: "row"
  },
  hintmark: {
    width: 20,
    height: 48,
    backgroundColor: VAR.MAIN_COLOR
  },
  hintwordbox: {
    height: 48,
    justifyContent: "center"
  },
  hintword: {
    color: "#707070",
    marginLeft: 12,
    fontSize: 13,
    marginRight: 26,
    lineHeight: 17
  },
  answerbox: {
    height: 48,
    borderWidth: 1,
    borderColor: "#ddd",
    // backgroundColor: "#8B8B8B",
    // backgroundColor: "#fff",
    backgroundColor: VAR.BUTTON_COLOR_SELECTED,
    marginTop: VAR.MAIN_MARGIN_TOP,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  inputbox: {
    width: "80%",
    height: 48,
    backgroundColor: "#8B8B8B",
    justifyContent: "center",
  },
  textbox: {
    marginLeft: 16,
    width: 230,
    height: 48,
    justifyContent: "center",
    color: "#fff"
  },
  submitbox: {
    width: "20%",
    height: 48,
    // backgroundColor:"#6C1B1F"
  },
  submit: {
    width: "100%",
    height: 48,
    backgroundColor: VAR.MAIN_COLOR,
    justifyContent: "center",
    alignItems: "center"
  },
  submittext: {
    color: "#fff",
    fontSize: 13
  },
  bottom: {
    backgroundColor: VAR.MAIN_COLOR,
    height: 20
  },
  floatbg: {
    position: 'absolute',
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(0,0,0)"
  },
  floatbox: {
    backgroundColor: "#fff",
    width: "50%",
    height: 200,
    flexDirection: "row"
  }
});

export default DetailScreen;
