import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image,Text } from 'react-native';

import { HomeStack, LocationStack, ContactStack, RankStack } from '../screens';
import LoginScreen from '../screens/LoginScreen';
import { hide } from 'expo/build/launch/SplashScreen';

const Tab = createBottomTabNavigator();
const MainTabNavigator = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      initialRouteName="login"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconPath;
          let iconSize;
          let iconTop;
          if (route.name === '首頁') {
            iconPath = focused
              ? require('../../assets/ic_home_pressed.png') :
              require('../../assets/ic_home.png');
            iconSize=focused?40:24;
            iconTop=focused?0:7.5;
          } else if (route.name === '地點篇') {
            iconPath = focused
              ? require('../../assets/ic_location_pressed.png') :
              require('../../assets/ic_location.png');
            iconSize=focused?40:24;
            iconTop=focused?0:7.5;
          } else if (route.name == '資訊聯絡篇') {
            iconPath = focused
              ? require('../../assets/ic_contact_pressed.png') :
              require('../../assets/ic_contact.png');
              iconSize=focused?40:24;
              iconTop=focused?0:7.5;
          } else if (route.name == '排行榜') {
            iconPath = focused
              ? require('../../assets/ic_rank_pressed.png') :
              require('../../assets/ic_rank.png');
            iconSize=focused?40:24;
            iconTop=focused?0:7.5;
          }

          // You can return any component that you like here!
          return (
            <Image
              style={{ width: iconSize, height: iconSize, top:iconTop ,zIndex:10}}
              source={iconPath}
            />
          );
        },
        tabBarLabel: ({ focused, color}) => {
          let showFont;
          if (route.name === '首頁') {
            showFont= focused? 'none' :'flex';
          } else if (route.name === '地點篇') {
            showFont= focused? 'none' :'flex';
          } else if (route.name == '資訊聯絡篇') {
            showFont= focused? 'none' :'flex';
          } else if (route.name == '排行榜') {
            showFont= focused? 'none' :'flex';
          }

          // You can return any component that you like here!
          return (
            <Text style={{ fontSize: 12,marginTop: 9,marginBottom: 7,padding: 0,display:showFont,color:'#707070'}} >
            {route.name}
            </Text>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#707070',
        // showLabel:false,
        labelStyle: {
          fontSize: 12,
          marginTop: 5,
          marginBottom: 8,
          padding: 0,
        },
        style: {
          // height:56,
          width: "125%",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
        },
      }}
    >
      {/* <Tab.Screen name="login" component={LoginScreen}
        options={() => {
            return {
                tabBarVisible: false,
            };
          }}/> */}
      <Tab.Screen name="首頁" component={HomeStack}
        options={props => {
          return {
            tabBarVisible: !props.route.state || props.route.state.index === 0,
          };
        }}
      />
      <Tab.Screen name="地點篇" component={LocationStack}
        options={props => {
          return {
            tabBarVisible: !props.route.state || props.route.state.index === 0,
          };
        }} />
      <Tab.Screen name="資訊聯絡篇" component={ContactStack}
        options={props => {
          return {
            tabBarVisible: !props.route.state || props.route.state.index === 0 ,
          };
        }} />
      <Tab.Screen name="排行榜" component={RankStack} />
      <Tab.Screen name="login" component={LoginScreen}
        options={() => {
          return {
            tabBarVisible: false,
          };
        }} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};
export default MainTabNavigator;