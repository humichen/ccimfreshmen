import React from "react";
import { View, FlatList,ImageBackground } from "react-native";
import Header from "../components/Header";
import LocationDetail from "../components/LocationDetail";
import contactData from "../json/contact.json";

const ContactScreen = ({ navigation }) => {
  return (
    <ImageBackground style={{flex: 1}} source={require('../../assets/bg_all.png')}>
      <FlatList
      data={contactData.contactList}
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

export default ContactScreen;
