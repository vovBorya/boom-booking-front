import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux'
import store from "./src/store";
import Screens from "./src/components/screens";

const client = new ApolloClient({
  uri: 'http://ec2-44-231-236-214.us-west-2.compute.amazonaws.com/v1'
});

export default function App() {

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <Screens />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};

