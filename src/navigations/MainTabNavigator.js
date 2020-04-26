import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image} from 'react-native';

import{HomeStack,LocationStack,ContactStack,RankStack} from '../screens';
import LoginScreen from '../screens/LoginScreen';
import { hide } from 'expo/build/launch/SplashScreen';

const Tab = createBottomTabNavigator();
const MainTabNavigator = () => {
    return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="login"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconPath;

            if (route.name === '首頁') {
              iconPath = focused
              ? require('../../assets/ic_home_pressed.png'):
              require('../../assets/ic_home.png');
                
            } else if (route.name === '地點篇') {
              iconPath = focused
              ? require('../../assets/ic_location_pressed.png'):
              require('../../assets/ic_location.png');
            } else if (route.name == '資訊聯絡篇') {
              iconPath = focused
              ? require('../../assets/ic_contact_pressed.png'):
              require('../../assets/ic_contact.png');
            } else if (route.name == '排行榜') {
              iconPath = focused
              ? require('../../assets/ic_rank_pressed.png'):
              require('../../assets/ic_rank.png');
            }

            // You can return any component that you like here!
            return (
              <Image 
                style={{width: 24, height: 24,marginTop:7}}
                source={iconPath} 
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#A7050E',
          inactiveTintColor: '#707070',
          labelStyle: {
            fontSize: 12,
            marginTop: 0,
            marginBottom:8,
            padding: 0,
          },
          style:{
            height:56,
            width:"125%"
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
        // options={props => {
        //     return {
        //         tabBarVisible: !props.route.state || props.route.state.index === 0,
        //     };
        // }}
        />
        <Tab.Screen name="地點篇" component={LocationStack}  
        options={props => {
          return {
              tabBarVisible: !props.route.state || props.route.state.index === 0,
          };
        }}/>
        <Tab.Screen name="資訊聯絡篇" component={ContactStack}  
        options={props => {
          return {
              tabBarVisible: !props.route.state || props.route.state.index === 0,
          };
        }}/>
        <Tab.Screen name="排行榜" component={RankStack}/>
        <Tab.Screen name="login" component={LoginScreen}
        options={() => {
            return {
                tabBarVisible: false,
            };
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
    );
};
export default MainTabNavigator;