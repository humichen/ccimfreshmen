import React from "react";
import { View, FlatList,ImageBackground } from "react-native";
import Header from "../components/Header";
import LocationDetail from "../components/LocationDetail";
import locationData from "../json/location.json";

const LocationScreen = ({ navigation }) => {
  return (
    <ImageBackground style={{flex: 1}} source={require('../../assets/bg_all.png')}>
      <FlatList
      data={locationData.locationList}
      renderItem={({ item }) => 
      <LocationDetail 
      location={item}       
        navigation={navigation}
      />}
      keyExtractor={item => item.title}
      />
    </ImageBackground>
  );
};

export default LocationScreen;
