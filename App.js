import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image,Text } from 'react-native';

import LocationScreen from './src/screens/LocationScreen';
import DetailScreen from './src/screens/DetailScreen';
import HomeScreen from './src/screens/HomeScreen';
import ContactScreen from './src/screens/ContactScreen';
import locationData from "./src/json/location.json";
import contactData from "./src/json/contact.json";
import homeData from "./src/json/home.json";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const LocationStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={LocationScreen} 
          options={{
            title: " ",
            headerStyle:{
              height:80,
              backgroundColor:"#A7050E",
            },
            headerLeft:()=><Text style={{fontWeight: '400',fontSize: 20,color:"#fff",marginLeft:16}}>{locationData.locationTitle}</Text>
          }}
        />
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen}
          options={({ route }) => ({ 
            title: route.params.title,
            headerStyle: {
              height:80,
              backgroundColor:"#A7050E",
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20,
              // marginLeft:-130
            },  
           })}
        />      
      </Stack.Navigator>
  );
}

const ContactStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Home2" 
          component={ContactScreen} 
          options={{
            title: " ",
            headerStyle:{
              height:80,
              backgroundColor:"#A7050E",
            },
            headerLeft:()=><Text style={{fontWeight: '400',fontSize: 20,color:"#fff",marginLeft:16}}>{contactData.contactTitle}</Text>
          }}
        />
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen}
          options={({ route }) => ({ 
            title: route.params.title,
            headerStyle: {
              height:80,
              backgroundColor:"#A7050E",
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20,
              // marginLeft:-130
            },  
           })}
        />      
      </Stack.Navigator>
  );
}

const HomeStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Home3" 
          component={HomeScreen} 
          options={{
            title: " ",
            headerStyle:{
              height:80,
              backgroundColor:"#A7050E",
            },
          headerLeft:()=><Text style={{fontWeight: '400',fontSize: 20,color:"#fff",marginLeft:16}}>{homeData.homeTitle}</Text>
          }}
        />     
      </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconPath;

            if (route.name === '首頁') {
              iconPath = focused
              ? require('./assets/ic_home_pressed.png'):
              require('./assets/ic_home.png');
            } else if (route.name === '地點篇') {
              iconPath = focused
              ? require('./assets/ic_location_pressed.png'):
              require('./assets/ic_location.png');
            } else if (route.name == '資訊聯絡篇') {
              iconPath = focused
              ? require('./assets/ic_contact_pressed.png'):
              require('./assets/ic_contact.png');
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
            height:56
          }
        }}
      >
        <Tab.Screen name="首頁" component={HomeStack}/>
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;