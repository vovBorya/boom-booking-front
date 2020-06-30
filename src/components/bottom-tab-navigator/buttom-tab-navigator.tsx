import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MainScreen from "../main-screen";
import AuthScreens from "../auth-screens";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {

  return(
    <Tab.Navigator>
      <Tab.Screen name='mainScreen' component={MainScreen} />
      <Tab.Screen name='authScreens' component={AuthScreens} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator;