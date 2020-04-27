import React from "react";
import { ScrollView, Linking, Text, Image, StyleSheet, ImageBackground, View, FlatList } from 'react-native';
import RankDetail from "../components/RankDetail";
import rankData from "../json/rank.json";

// Make a component
const RankScreen = ({ navigation }) => {
  return (
    <ImageBackground style={{ flex: 1 }} source={require('../../assets/bg_all.png')}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.rankbox}>
          <View style={styles.rankborderbox}>
            <View style={styles.ranktitlebox}>
              <ImageBackground style={{ flex: 1, width: 156, height: 25 }} source={require('../../assets/bg_rank.png')}>
                <View style={styles.rankTitlesmallbox}>
                  <Text style={styles.rankTitlesmallStyle}>{rankData.rankTitlesmall}</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.rankContainer}>
            <FlatList
              data={rankData.rankList}
              renderItem={({ item }) =>
                <RankDetail
                  rank={item}
                  navigation={navigation}
                />}
              keyExtractor={item => item.name}
            />
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
    marginTop: "5%",
  },
  rankbox: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    height: "100%",
    justifyContent: "center"
  },
  rankborderbox: {
    borderWidth: 1.5,
    borderColor: "#A7050E",
    height: "96%",
    marginRight: 10,
    marginLeft: 10
  },
  ranktitlebox: {
    width: 156,
    height: 25,
    marginTop: "-4%",
    marginLeft: -12,
  },
  rankTitlesmallbox: {
    width: 156,
    height: 25,
    justifyContent: "center",
    marginLeft: 14,
  },
  rankTitlesmallStyle: {
    color: "#fff",
    fontSize: 13
  },
  rankContainer:{
    marginTop:13,
    height:"90%",
    width:"100%",
    alignItems:"center"
  }
});

export default RankScreen;
