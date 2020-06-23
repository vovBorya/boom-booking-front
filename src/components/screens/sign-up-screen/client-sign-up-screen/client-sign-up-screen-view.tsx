import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./client-sign-up-screen-styles";

type ClientSignUpScreenViewProps = {

}

const ClientSignUpScreenView: React.FC<ClientSignUpScreenViewProps> = () => {

  return (
    <View style={styles.container}>
      <Text>client sign up</Text>
    </View>
  )
}

export default ClientSignUpScreenView