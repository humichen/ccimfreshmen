import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

import LocationScreen from './LocationScreen';
import DetailScreen from './DetailScreen';
import HomeScreen from './HomeScreen';
import ContactScreen from './ContactScreen';
import RankScreen from './RankScreen';
import LoginScreen from './LoginScreen';
import EditScreen from './EditScreen';
import locationData from "../json/location.json";
import contactData from "../json/contact.json";
import homeData from "../json/home.json";
import rankData from "../json/rank.json";

export const Stack = createStackNavigator();

export const LocationStack = () => {
    
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
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
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
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
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
  
export const ContactStack = () => {
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
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
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
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
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
  
export const HomeStack = () => {
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
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
              },
            headerLeft:()=><Text style={{fontWeight: '400',fontSize: 20,color:"#fff",marginLeft:16}}>{homeData.homeTitle}</Text>
            }}
          /> 
          <Stack.Screen 
            name="Edit" 
            component={EditScreen}
            options={() => ({ 
              title:" ",
              headerStyle: {
                height:80,
                backgroundColor:"#A7050E",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
              },
              headerTintColor: '#fff',
              headerLeft:() =>{}
             })}
          />  
        </Stack.Navigator>
    );
  }
  
export const RankStack = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen 
            name="Home3" 
            component={RankScreen} 
            options={{
              title: " ",
              headerStyle:{
                height:80,
                backgroundColor:"#A7050E",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
              },
            headerLeft:()=><Text style={{fontWeight: '400',fontSize: 20,color:"#fff",marginLeft:16}}>{rankData.rankTitle}</Text>
            }}
          />     
        </Stack.Navigator>
    );
  }