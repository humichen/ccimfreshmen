import React, { useContext, useState, useEffect } from "react";
import * as firebase from "firebase";
import { ScrollView, Linking, Text, Image, StyleSheet, ImageBackground, View, FlatList,SectionList } from 'react-native';
import { StoreContext } from "../stores/progressstore";
import RankDetail from "../components/RankDetail";
import rankData from "../json/rank.json";
import { VAR } from "../core/variable"
import FadeInView from "../animation/fadeAnim";

// Make a component
const RankScreen = ({ navigation }) => {
  const { meState} = useContext(StoreContext);
  const [me, setMe] = meState;
  const [rankItems, setrankItems] = useState([]);

  useEffect(() => {
    var A = [];
    var i = 0;
    var puzzle=[]
    var rankdataRef = firebase.database().ref(parseInt(me.year / 100000) - 1000).orderByChild('timeStamp');
    rankdataRef.once('value',function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        let childKey = childSnapshot.key;
        let childData = childSnapshot.val();
        if (childData !== A[i]) {
          puzzle={...childData,order:i+1}
          A[i] =  puzzle;
          i++;
          setrankItems(A);
        }
      });
    });
    },[me]);
  return (
    <ImageBackground style={{ flex: 1 }} source={require('../../assets/bg_all.png')}>
      <FadeInView style={styles.cardContainerStyle}>
        <View style={styles.rankbox}>
          <View style={styles.rankborderbox}>
            <View style={styles.ranktitlebox}>
              <ImageBackground style={{ flex: 1, width: 156, height: 25 }} source={require('../../assets/bg_rank.png')}>
                <View style={styles.rankTitlesmallbox}>
                  <Text style={styles.rankTitlesmallStyle}>{parseInt(me.year / 100000) - 1000}年度{rankData.rankTitlesmall}</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.rankContainer}>
              <FlatList
                data={rankItems}
                renderItem={({ item }) =>
                  <RankDetail
                    rank={item}
                    navigation={navigation}
                  />}
                keyExtractor={item => item.order}
              />
            </View>
          </View>

        </View>

      </FadeInView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  cardContainerStyle: {
    marginLeft: VAR.MAIN_MARGIN_LEFT,
    marginRight: VAR.MAIN_MARGIN_RIGHT,
    marginTop: VAR.MAIN_MARGIN_TOP,
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
    borderColor: VAR.MAIN_COLOR,
    height: "96%",
    marginRight: 10,
    marginLeft: 10,
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
    fontSize: 14
  },
  rankContainer: {
    marginTop: 13,
    height: "90%",
    width: "100%",
    justifyContent: "center",
    alignItems:"center"
    // flexDirection:"row"
  },
});
export default RankScreen;
