import SignInScreen from "./sign-in-screen";
// @ts-ignore
import translate from "../../utils/i18n";
import SignUpScreen from "./sign-up-screen/sign-up-screen";
import ClientSignUpScreen from "./sign-up-screen/client-sign-up-screen";
import AdminSignUpScreen from "./sign-up-screen/admin-sign-up-screen";
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

const AuthStack = createStackNavigator();

const Screens = () => {

  return(
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <AuthStack.Screen
        name="signIn"
      component={SignInScreen}
      options={{ title: translate('common.signInTitle') }}
      />
      <AuthStack.Screen
      name="signUp"
      component={SignUpScreen}
      options={{ title: translate('common.signUpTitle') }}
      />
      <AuthStack.Screen
      name="clientSignUp"
      component={ClientSignUpScreen}
      options={{ title: "регистрация как пользователь" }}
      />
      <AuthStack.Screen
      name="adminSignUp"
      component={AdminSignUpScreen}
      options={{ title: "регистрация как admin" }}
      />
    </AuthStack.Navigator>
  )
}

export default Screens

