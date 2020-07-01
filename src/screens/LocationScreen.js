import React, { useContext } from "react";
import { View, FlatList,ImageBackground } from "react-native";
import LocationDetail from "../components/LocationDetail";
import locationData from "../json/location.json";
import { StoreContext } from "../stores/progressstore";

const LocationScreen = ({ navigation }) => {
  const { locationsState,meState} = useContext(StoreContext);
  const [locations,setlocations] = locationsState;
  return (
    <ImageBackground style={{flex: 1}} source={require('../../assets/bg_all.png')}>
      <FlatList
      data={locations}
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
