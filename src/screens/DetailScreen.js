import React, { useContext, useState } from "react";
import { ScrollView, Linking, Text, Image, StyleSheet, ImageBackground, View, StatusBar, TextInput, TouchableHighlight, TouchableOpacity,Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Input } from "react-native-elements";
import { StoreContext } from "../stores/progressstore";

const DetailScreen = ({ route }) => {
  const { title,
    bgimage,
    recimage,
    description,
    hint,
    laybel,
    ans,
    count
  } = route.params;
  const { meState, locationsState, contactState } = useContext(StoreContext);
  const [me, setMe] = meState;
  const [locations, setlocations] = locationsState;
  const [contact, setcontact] = contactState;

  const [submit, setsubmit] = useState(false);

  var showstate = "";
  var showstate1 = ""
  if (count === false) {
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
              <Text style={styles.hintword}>地點提示：{hint}</Text>
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
                    setMe({...me,answer:null});
                    // setlocations({...locations,count:true})
                     alert(
                       "回答正確",
                        //  {
                        //    text:"OK",
                        //    onPress: () => {}
                        //  }
                     )
                  }
                  else{
                    alert(
                      "回答錯誤",
                        // {
                        //   title:"TryAgain",
                        //   onPress: () => {}
                        // }
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
    fontSize: 12,
    height: 18,
  },
  descriptionbox: {
    marginTop: 4,
    marginLeft: 14,
    marginRight: 14,
    height: 110,
    justifyContent: "center"
  },
  descriptionStyle: {
    color: "#707070",
    fontSize: 12,
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
    fontSize: 12,
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
    fontSize: 12
  },
  bottom: {
    backgroundColor: "#A7050E",
    height: 20
  }
});

export default DetailScreen;
