import React from "react";
import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./sign-up-screen-styles";

type SignUpScreenViewProps = {
  onClientPress: () => void
  onAdminPress: () => void
}

const SignUpScreenView: React.FC<SignUpScreenViewProps> = ({ onClientPress, onAdminPress }) => {
  return(
    <View style={styles.container}>
      <View style={styles.selectionBlock}>
        <TouchableOpacity style={styles.userSignUp} onPress={onClientPress}>
          <Text>client</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.adminSignUp} onPress={onAdminPress}>
          <Text>admin</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUpScreenView