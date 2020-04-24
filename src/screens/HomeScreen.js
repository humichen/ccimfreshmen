import React from "react";
import { ScrollView, Linking, Text, Image, StyleSheet, ImageBackground, View } from 'react-native';
import { ProgressBar} from 'react-native-paper';
import homeData from "../json/home.json";

// Make a component
const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground style={{ flex: 1 }} source={require('../../assets/bg_all.png')}>
      <View style={styles.cardContainerStyle}>
        {/* <View style={styles.part1box}>
          <View style={styles.decoratebox}>
            <Text style={styles.part1word}>{homeData.part1}</Text>
            <Image style={styles.ccimlogoStyle} source={require('../../assets/ccimlogo.png')} />
          </View>
        </View> */}
        <View style={styles.part1box}>
          <View style={styles.part1mark}></View>
            <View style={styles.part1wordbox}>
              <Text style={styles.nameStyle}>姓名：</Text>
              <View style={styles.locationprobar}>
                <Text style={styles.probartitle}>地點篇&emsp;&emsp;：</Text>
                <ProgressBar progress={0.5} style={styles.probarStyle} color={'#FEBC5F'}/>
                <Text style={styles.ansright}> /8</Text>
              </View>
              <View style={styles.contactprobar}>
                <Text style={styles.probartitle}>資訊聯絡篇：</Text>
                <ProgressBar progress={0.5} style={styles.probarStyle} color={'#FEBC5F'}/>
                <Text style={styles.ansright}> /8</Text>
              </View>
            </View>
        </View>
        <View style={styles.part2box}>
          <View style={{ height: 28 }}>
            <ImageBackground style={{ flex: 1, width: 160, height: 28 }} source={require('../../assets/bg_missionstatement.png')}>
              <View style={styles.part2titlebox}>
                <Text style={styles.part2titleStyle}>{homeData.part2title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.part2wordbox}>
            <View style={styles.locationbox}>
              <View style={styles.wordtitleStyle}>
                <View style={styles.markpoint}></View>
                <Text style={{ fontSize: 12 }}>{homeData.locationtitle}</Text>
              </View>
              <Text style={styles.word}>&emsp;&emsp;{homeData.locationword}</Text>
              <Text style={styles.word}>{homeData.locationway}</Text>
            </View>
            <View style={styles.contactbox}>
              <View style={styles.wordtitleStyle}>
                <View style={styles.markpoint}></View>
                <Text style={{ fontSize: 12 }}>{homeData.contacttitle}</Text>
              </View>
              <Text style={styles.word}>&emsp;&emsp;{homeData.contactword}</Text>
              <Text style={styles.word}>{homeData.contactway}</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  cardContainerStyle: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: "8%",
  },
  part1box: {
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    height: 140,
    backgroundColor: "#fff",
    flexDirection:"row"
  },
  decoratebox: {
    height: 126,
    borderWidth: 1,
    borderColor: "#A7050E",
    marginLeft: 7,
    marginRight: 7,
    // flexDirection:"row",
    // alignItems:"center",
    justifyContent: "center"
  },
  part1word: {
    color: "#FF9500",
    fontSize: 13,
    lineHeight: 17,
    marginLeft: "5%",
    marginTop: 10
  },
  ccimlogoStyle: {
    width: 37,
    height: 37,
    marginTop: -20,
    marginLeft: "80%"
  },
  part2box: {
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    height: 285,
    backgroundColor: "#fff",
    marginTop: "8%"
  },
  part2titlebox: {
    height: 28,
    width: 160,
    justifyContent: "center",
    marginLeft: 12
  },
  part2titleStyle: {
    color: "#fff",
    fontSize: 12
  },
  part2wordbox: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 16
  },
  wordtitleStyle: {
    flexDirection: "row",
    height: 18,
    alignItems: "center"
  },
  markpoint: {
    backgroundColor: "#A7050E",
    width: 9,
    height: 18,
    marginRight: 4
  },
  word: {
    fontSize: 12,
    color: "#707070",
    lineHeight: 17,
    marginLeft: 13,
    marginTop: 2,
    marginBottom: 4
  },
  contactbox: {
    marginTop: 8
  },
  part1mark:{
    backgroundColor:"#A7050E",
    width:20
  },
  part1wordbox:{
    marginLeft:12,
    marginRight:15,
    justifyContent:"center"
  },
  nameStyle:{
    color:"#000",
    fontSize:16,
    lineHeight:21
  },
  locationprobar:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:22
  },
  contactprobar:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:18
  },
  probarStyle:{
    width:162,
    height:8,
    backgroundColor:"#E0E0E0"
  },
  probartitle:{
    color:"#000000",
    fontSize:12,
    height:17,
    lineHeight:16,
    marginRight:5
  },
  ansright:{
    fontSize:12,
    color:"#000",
    marginLeft:6
  }
});

export default HomeScreen;
