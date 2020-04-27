import React, { createContext, useState } from "react";
import locationData from '../json/location.json';
import contactData from '../json/contact.json';
import homeData from '../json/home.json';
import meData from '../json/me.json';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {  
    const [me, setMe] = useState(meData);
    const [locations, setlocations] = useState(locationData.locationList);
    const [contact, setcontact] = useState(contactData.contactList);
    const store ={
        meState: [me, setMe],
        locationsState:[locations, setlocations],
        contactState:[contact, setcontact]
    };
    return (
        <StoreContext.Provider value={store}>
           {children}
        </StoreContext.Provider>
       );
};