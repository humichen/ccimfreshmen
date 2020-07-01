import React, { useContext } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking,ImageBackground} from "react-native";
import { StoreContext } from "../stores/progressstore";
import {VAR} from "../core/variable"
import FadeInView from "../animation/fadeAnim"

const LocationDetail = ({ location, navigation }) => {
  const { meState,ordernumState } = useContext(StoreContext);
  const [me, setMe] = meState;
  const[ordernum,setordernum]=ordernumState;

  const answerStateArray=[me._0,me._1,me._2,me._3,me._4,me._5,me._6,me._7,me._8,me._9,me._10,me._11]
  var state="";
  var bgcolor="";
  var statecolor="";
  if(answerStateArray[location.array]){
    state="已完成";
    bgcolor=VAR.BUTTON_COLOR_SELECTED
    statecolor="#fff"
  }else{
    state="未完成";
    bgcolor=VAR.BUTTON_COLOR
   statecolor="#656565"
  }

   return (
      <FadeInView style={styles.cardContainerStyle}>
        <TouchableOpacity 
            onPress={() => {navigation.navigate('Detail',location); setordernum(0);}} activeOpacity={0.6}
          >
            <View style={[styles.locationbox,{backgroundColor:bgcolor}]}>
              <ImageBackground style={{flex:1,width:"95%",flexDirection:"row"}} source={{uri:location.bgimage}}>
                <View style={styles.titlebox}>
                  <Text style={styles.locationtitle}>{location.title}</Text>
                </View>
               <Text style={[styles.stateStyle,{color:statecolor}]}>{state}</Text>  
              </ImageBackground>
              
            </View>
          </TouchableOpacity>
      </FadeInView>
  )};

const styles = StyleSheet.create({
  cardContainerStyle: {
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.1,
    elevation: 1,
    marginLeft: VAR.MAIN_MARGIN_LEFT,
    marginRight: VAR.MAIN_MARGIN_RIGHT,
    marginTop: VAR.MAIN_MARGIN_TOP,
    marginBottom:4,
    backgroundColor:VAR.BUTTON_COLOR
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderBottomWidth: 1
  },
  imageStyle: {
    height: 300,
    width: null
  },
  locationbox:{
    height:72,
    backgroundColor:VAR.BUTTON_COLOR,
    flexDirection:"row"
  },
  titlebox:{
    justifyContent:"center"
  },
  locationtitle:{
    fontSize:18,
    color:"#000000",
    height:22,
    marginLeft:40,
    width:105
  },
  stateStyle:{
    marginTop:48,
    marginLeft:"37.5%",
    fontSize:16,
    // color:"#656565",
  },
});

export default LocationDetail;
