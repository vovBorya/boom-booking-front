import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import {createStackNavigator} from "@react-navigation/stack";
import SignInScreen from "./src/components/screens/sign-in-screen";
import SignUpScreen from "./src/components/screens/sign-up-screen/sign-up-screen";
import { Provider } from 'react-redux'
import store from "./src/store";
// @ts-ignore
import translate from './src/utils/i18n.js'
import ClientSignUpScreen from "./src/components/screens/sign-up-screen/client-sign-up-screen";

const client = new ApolloClient({
  uri: 'some-address'
});

const Stack = createStackNavigator();

export default function App() {

  const [ userToken, setUserToken ] = useState<string | null>(null)

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator>
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
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </Provider>
  );
};

