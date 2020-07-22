import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux'
import store from "./src/store";
import BottomTabNavigator from "./src/components/bottom-tab-navigator";

const client = new ApolloClient({
  uri: 'http://boombooking-dev.eba-zwieqwvi.us-east-2.elasticbeanstalk.com/v1'
});

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

