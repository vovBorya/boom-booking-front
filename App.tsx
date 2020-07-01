import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux'
import store from "./src/store";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import BottomTabNavigator from "./src/components/bottom-tab-navigator";

const client = new ApolloClient({
  uri: 'http://ec2-44-231-236-214.us-west-2.compute.amazonaws.com/v1'
});

const Tab = createMaterialBottomTabNavigator();

export default function App() {

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};

