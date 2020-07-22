import React from "react";

import {createStackNavigator} from "@react-navigation/stack";
import OrdersScreen from "./order-list";
import {colors} from "../../resources/colors";

const OrdersScreensStack = createStackNavigator();

const OrdersScreens = () => {

  return(
    <OrdersScreensStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.defaultBorder,
        },
        headerTintColor: '#fff'
      }}
    >
      <OrdersScreensStack.Screen
        name="orderList"
        component={OrdersScreen}
        options={{ title: "Orders" }}
      />
    </OrdersScreensStack.Navigator>
  );
};

export default OrdersScreens;