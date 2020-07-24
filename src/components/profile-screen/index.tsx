import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./profile-screen";
import {colors} from "../../resources/colors";

const ProfileStack = createStackNavigator();

const ProfileScreens = () => {

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.defaultBorder,
        },
        headerTintColor: colors.mainBackground
      }}
    >
      <ProfileStack.Screen
        name="profile"
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />
    </ProfileStack.Navigator>
  )
}

export default ProfileScreens;