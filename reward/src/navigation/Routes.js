import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../screens';
import navigationStrings from '../constants/navigationStrings';
import CustomDrawer from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={navigationStrings.LOGIN}
          component={Screens.Login}
        />
        {/* <Stack.Screen
          name={navigationStrings.CUSTOM_DRAWER}
          component={CustomDrawer}
        /> */}
        <Stack.Screen
          name={navigationStrings.REGISTER}
          component={Screens.Register}
        />
        <Stack.Screen name={navigationStrings.HOME} component={CustomDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
