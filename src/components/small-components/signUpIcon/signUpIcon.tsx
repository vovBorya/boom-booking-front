import React from "react";
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./signUpIcon";

type SignUpIconProps = {
  label: string
  iconAddress: string
  onIconClick: () => void
}

const SignUpIcon: React.FC<SignUpIconProps> = ({ label, iconAddress, onIconClick }) => {

  return(
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.touchable} onPress={onIconClick}>
      </TouchableOpacity>
    </View>
  )
}

export default SignUpIcon