import React from "react";
import { ScrollView, Linking, Text, Image, StyleSheet, ImageBackground, View,StatusBar} from 'react-native';


const DetailScreen = ({ route }) => {
  const { title,
    bgimage,
    recimage,
    description,
    hint,
    laybel,
    ans
  } = route.params;

  return (
    <ImageBackground style={{ flex: 1,}} source={require('../../assets/bg_all.png')}>
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
          <Text>{laybel}</Text>
        </View>
      </View>
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
  hintbox:{
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    height: 48,
    marginTop:"5%",
    flexDirection:"row"
  },
  hintmark:{
    width:20,
    height:48,
    backgroundColor:"#A7050E"
  },
  hintwordbox:{
    height:48,
    justifyContent:"center"
  },
  hintword:{
    color:"#707070",
    marginLeft:12,
    fontSize:12,
    marginRight:26,
    lineHeight:17
  },
  answerbox:{
    height:48,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    height: 48,
    marginTop:"5%",
    flexDirection:"row",
    alignItems:"center"
  }
});

export default DetailScreen;
