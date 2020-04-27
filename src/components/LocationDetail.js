import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking,ImageBackground} from "react-native";

const LocationDetail = ({ location, navigation }) => {
  var state="";
  var bgcolor="";
  var statecolor="";
  if(location.count){
    state="已完成";
    bgcolor="#FEBC5F"
    statecolor="#fff"
  }else{
    state="未完成";
    bgcolor="#DBDBDB"
   statecolor="#656565"
  }

   return (
      <View style={styles.cardContainerStyle}>
        <TouchableOpacity 
            onPress={() => navigation.navigate('Detail',location)} activeOpacity={0.6}
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
      </View>
  )};

const styles = StyleSheet.create({
  cardContainerStyle: {
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.1,
    elevation: 1,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 14,
    marginBottom:6,
    backgroundColor:"#DBDBDB"
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
    backgroundColor:"#DBDBDB",
    flexDirection:"row"
  },
  titlebox:{
    justifyContent:"center"
  },
  locationtitle:{
    fontSize:20,
    color:"#000000",
    height:28,
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
