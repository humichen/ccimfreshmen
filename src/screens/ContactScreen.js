import React, { useContext }  from "react";
import { View, FlatList,ImageBackground } from "react-native";
import LocationDetail from "../components/LocationDetail";
import contactData from "../json/contact.json";
import { StoreContext } from "../stores/progressstore";
import {VAR} from "../core/variable"
import FadeInView from "../animation/fadeAnim"

const ContactScreen = ({ navigation }) => {
  const { contactState,meState} = useContext(StoreContext);
  const [contact, setcontact] =  contactState;
  const [me, setMe] = meState;
  return (
    <ImageBackground style={{flex: 1}} source={require('../../assets/bg_all.png')}>
      <FlatList
      data={contact}
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
