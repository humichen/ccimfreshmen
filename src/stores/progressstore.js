import React, { createContext, useState,useEffect } from "react";
import { AsyncStorage } from "react-native";
import locationData from '../json/location.json';
import contactData from '../json/contact.json';
import homeData from '../json/home.json';
import meData from '../json/me.json';
import rankdata from '../json/rank.json';
const ME_PERSISTENCE_KEY = "ME_PERSISTENCE_KEY";
const HAS_SET_KEY = "HAS_SET_KEY";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {  
    const [me, setMe] = useState(meData);
    const [locations, setlocations] = useState(locationData.locationList);
    const [contact, setcontact] = useState(contactData.contactList);
    const [isLogin, setIsLogin] = useState(false);
    const [ordernum,setordernum]=useState(0);
    const store ={
        meState: [me, setMe],
        locationsState:[locations, setlocations],
        contactState:[contact, setcontact],
        isLoginState: [isLogin, setIsLogin],
        ordernumState:[ordernum,setordernum]
    };
    const restoreState=async () => {
        try {
        const hasSetString = await AsyncStorage.getItem(HAS_SET_KEY);
        const hasSet = JSON.parse(hasSetString);
        if (hasSet) {
            const meString = await AsyncStorage.getItem(ME_PERSISTENCE_KEY);
            const state_me = JSON.parse(meString);
            setMe(state_me);
          }
        } catch (e) {}
    };
    useEffect(() => {
        restoreState();
      }, []);

    return (
        <StoreContext.Provider value={store}>
           {children}
        </StoreContext.Provider>
       );
};