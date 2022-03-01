import React , {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView} from 'react-native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/provider';
const AppNavContainer=() => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);
    
    
    console.log('isLoggedin :>>' , isLoggedIn);
    return(
    <NavigationContainer>
    <SafeAreaView >
        {isLoggedIn? <HomeNavigator/>: <AuthNavigator/>}
      {/*<AuthNavigator/>*/}
      {/*<HomeNavigator/>*/}
      {/*<DrawerNavigator/>*/}
    </SafeAreaView>
   </NavigationContainer>

    )
}

export default AppNavContainer;
