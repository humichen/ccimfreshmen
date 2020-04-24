import React from "react";
import { ScrollView, Linking, Text, Image, StyleSheet, ImageBackground, View } from 'react-native';
import homeData from "./src/json/home.json";

// Make a component
const HomeScreen = ({ navigation }) => {
    return (
    <ImageBackground style={{flex: 1}} source={require('../../assets/bg_all.png')}>
      <View>

      </View>
    </ImageBackground>
    );
}
const styles = StyleSheet.create({
  
});

export default HomeScreen;
