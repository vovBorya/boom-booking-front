import React from "react";
import {ActivityIndicator, StyleSheet, View} from "react-native";

const SpinnerScreen: React.FC  = () => {
  return(
    <View style={styles.container}>
      <ActivityIndicator size={60} color="#e18c44" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default SpinnerScreen