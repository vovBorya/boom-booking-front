import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import {createStackNavigator} from "@react-navigation/stack";
import SignInPage from "./src/components/pages/sign-in-page";
import SignUpPage from "./src/components/pages/sign-up-page";

const client = new ApolloClient({
  uri: 'some-address'
})

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name=" "
              component={SignInPage}
          />
          <Stack.Screen
            name="Sign Up"
            component={SignUpPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

