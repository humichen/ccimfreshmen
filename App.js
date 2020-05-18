import React ,{ useContext,useEffect }  from 'react';
import { Platform, AsyncStorage } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import MainTabNavigator from './src/navigations/MainTabNavigator';
import { SplashScreen } from 'expo';

import { StoreProvider,StoreContext } from "./src/stores/progressstore";
const PERSISTENCE_KEY = "ALBUMS_NAVIGATION_STATE4";

const App = () => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const { meState } = useContext(StoreContext);
  const [me, setMe] = meState;

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    if(me.loginstate){
      return(
      <NavigationContainer
        onStateChange={(state) =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }
      >
       <MainTabNavigator /> 

      </NavigationContainer>
      )
    }else{
      return (
      <NavigationContainer
        initialState={initialNavigationState}
        onStateChange={(state) =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }
      >
       <MainTabNavigator /> 

      </NavigationContainer>
    );
    }
    
  }
}

export default () => {
  return (
   <StoreProvider>
     <App />
   </StoreProvider>
  )};