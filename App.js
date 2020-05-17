import React from 'react';
import { Platform, AsyncStorage } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import MainTabNavigator from './src/navigations/MainTabNavigator';
import { SplashScreen } from 'expo';

import { StoreProvider } from "./src/stores/progressstore";
const PERSISTENCE_KEY = "ALBUMS_NAVIGATION_STATE2";

const App = () => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();

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

export default () => {
  return (
   <StoreProvider>
     <App />
   </StoreProvider>
  )};