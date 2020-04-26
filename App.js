import React from 'react';
import MainTabNavigator from './src/navigations/MainTabNavigator';

import { StoreProvider } from "./src/stores/progressstore";

const App = () => {
  return <MainTabNavigator />;
}

export default () => {
  return (
   <StoreProvider>
     <App />
   </StoreProvider>
  )};