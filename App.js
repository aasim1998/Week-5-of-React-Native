/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import AppNavContainer from './src/navigations';
import GlobalProvider from './src/context/provider';
  
  
const App =  () => {
  return (
    <GlobalProvider>
      <AppNavContainer/>
    </GlobalProvider>
   
  );
};
export default App;
  
  





  

      
      
          
