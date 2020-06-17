import React from "react";
import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./sign-up-page-styles";

type SignUpPageViewProps = {

}

const SignUpPageView: React.FC<SignUpPageViewProps> = ({}) => {
  return(
    <View style={styles.container}>
      <Text>sign up</Text>
    </View>
  )
}

export default SignUpPageView