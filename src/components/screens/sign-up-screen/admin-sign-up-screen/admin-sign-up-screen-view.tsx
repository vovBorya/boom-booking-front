import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./admin-sign-up-screen-styles";

type AdminSignUpScreenViewProps = {

}

const AdminSignUpScreenView: React.FC<AdminSignUpScreenViewProps> = () => {

  return (
    <View style={styles.container}>
      <Text>admin sign up</Text>
    </View>
  )
}

export default AdminSignUpScreenView