import SignInScreen from "./sign-in-screen";
// @ts-ignore
import translate from "../../utils/i18n";
import SignUpScreen from "./sign-up-screen/sign-up-screen";
import ClientSignUpScreen from "./sign-up-screen/client-sign-up-screen";
import AdminSignUpScreen from "./sign-up-screen/admin-sign-up-screen";
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

const Screens = () => {

  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="signIn"
      component={SignInScreen}
      options={{ title: translate('common.signInTitle') }}
      />
      <Stack.Screen
      name="signUp"
      component={SignUpScreen}
      options={{ title: translate('common.signUpTitle') }}
      />
      <Stack.Screen
      name="clientSignUp"
      component={ClientSignUpScreen}
      options={{ title: "регистрация как пользователь" }}
      />
      <Stack.Screen
      name="adminSignUp"
      component={AdminSignUpScreen}
      options={{ title: "регистрация как admin" }}
      />
    </Stack.Navigator>
  )
}

export default Screens

