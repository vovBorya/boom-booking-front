import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MainScreen from "../main-screen";
import AuthScreens from "../auth-screens";
import styles from "./bottom-tab-navigator-style";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OrdersScreens from "../orders-screens";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {

  return(
    <Tab.Navigator
      initialRouteName='mainScreen'
      activeColor='white'
      inactiveColor='#444'
      barStyle={styles.tabBar}
    >
      <Tab.Screen
        name='mainScreen'
        component={MainScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="anchor" color={color} size={20} />
          )
        }}
      />
      <Tab.Screen
        name='ordersScreens'
        component={OrdersScreens}
        options={{
          title: "Orders",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="text" color={color} size={20} />
          )
        }}
      />
      <Tab.Screen
        name='authScreens'
        component={AuthScreens}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={20} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator;