import React from "react";
import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./sign-up-screen-styles";

type SignUpScreenViewProps = {

}

const SignUpScreenView: React.FC<SignUpScreenViewProps> = ({}) => {
  return(
    <View style={styles.container}>
      <Text>sign up</Text>
    </View>
  )
}

export default SignUpScreenView