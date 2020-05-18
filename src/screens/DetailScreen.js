import React, { useContext, useState,useEffect } from "react";
import { ScrollView, Linking, Text, Image, StyleSheet, ImageBackground, View, StatusBar, TextInput, TouchableHighlight, TouchableOpacity,Alert,AsyncStorage } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Input } from "react-native-elements";
import { StoreContext } from "../stores/progressstore";
const ME_PERSISTENCE_KEY = "ME_PERSISTENCE_KEY";
const HAS_SET_KEY = "HAS_SET_KEY";

const DetailScreen = ({ route }) => {
  const { title,
    bgimage,
    recimage,
    description,
    hint,
    laybel,
    ans,
    array
  } = route.params;
  const { meState, locationsState, contactState } = useContext(StoreContext);
  const [me, setMe] = meState;
  let A=[me._0,me._1,me._2,me._3,me._4,me._5,me._6,me._7,me._8,me._9,me._10,me._11]
  const [submit, setsubmit] = useState(false);

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
  if (A[array] === false) {
    showstate = "flex";
    showstate1 = "none"
    if (submit === true) {
      showstate = "none";
      showstate1 = "flex";
    }
  }else{
    showstate = "none";
    showstate1 = "flex";
  }
  const [countl, setcountl] = useState(0);
  const [countc, setcountc] = useState(0);
  // for(let i=0;i<8;i++){
  //   if(A[i])setcountl(countl+1);
  // }
  // for(let i=8;i<12;i++){
  //   if(A[i])setcountc(countc+1);
  // }

  return (

    <ImageBackground style={{ flex: 1 }} source={require('../../assets/bg_all.png')}>
      <KeyboardAwareScrollView>
        <Image style={styles.imgrecStyle} source={{ uri: recimage }} />

        <View style={styles.cardContainerStyle}>
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
                onChangeText={(answer) => setMe({ ...me, answer })}
              />
            </View>
            <View style={styles.submitbox}>
              <TouchableHighlight style={[styles.submit, { display: showstate }]}
                onPress={() => {
                  if(me.answer===ans){
                    setsubmit(true);
                    A[array]=true;
                    if(array<8)setMe({...me,answer:null,_0:A[0],_1:A[1],_2:A[2],_3:A[3],_4:A[4],_5:A[5],_6:A[6],_7:A[7],_8:A[8],_9:A[9],_10:A[10],_11:A[11],locationbar:(me.locationrightans+1)/8,locationrightans:me.locationrightans+1});
                    else setMe({...me,answer:null,_0:A[0],_1:A[1],_2:A[2],_3:A[3],_4:A[4],_5:A[5],_6:A[6],_7:A[7],_8:A[8],_9:A[9],_10:A[10],_11:A[11],contactbar:(me.contactrightans+1)/4,contactrightans:me.contactrightans+1});

                     alert(
                      "回答正確",
                     )
                  }
                  else{
                    alert(
                      "回答錯誤",
                    )
                     setMe({...me,answer:null});
                  }
                }}
                activeOpacity={0.6}
                underlayColor={"#6C1B1F"}
              >
                <Text style={styles.submittext}>送出</Text>
              </TouchableHighlight>
            </View>


          </View>

        </View>
      </KeyboardAwareScrollView>
      <View style={styles.bottom}></View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  imgrecStyle: {
    height: 200,
    backgroundColor: "#DBDBDB"
  },
  cardContainerStyle: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 28,
    marginRight: 28,
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
    marginTop: "5%",
    flexDirection: "row"
  },
  hintmark: {
    width: 20,
    height: 48,
    backgroundColor: "#A7050E"
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
    backgroundColor: "#FEBC5F",
    marginTop: "5%",
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
    backgroundColor: "#A7050E",
    justifyContent: "center",
    alignItems: "center"
  },
  submittext: {
    color: "#fff",
    fontSize: 13
  },
  bottom: {
    backgroundColor: "#A7050E",
    height: 20
  }
});

export default DetailScreen;
