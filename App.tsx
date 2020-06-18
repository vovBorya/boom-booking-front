import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import {createStackNavigator} from "@react-navigation/stack";
import SignInScreen from "./src/components/screens/sign-in-page";
import SignUpScreen from "./src/components/screens/sign-up-page";

const client = new ApolloClient({
  uri: 'some-address'
});

const Stack = createStackNavigator();

export default function App() {

  const [ userToken, setUserToken ] = useState<string | null>(null)

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          {
            userToken == null ? (
              <React.Fragment>
                <Stack.Screen name="Sign In" component={SignInScreen}/>
                <Stack.Screen name="Sign Up" component={SignUpScreen}/>
              </React.Fragment>
            ) : null
          }
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

