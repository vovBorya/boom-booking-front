import React from "react";
import {ActivityIndicator, StyleSheet, View} from "react-native";

const Spinner: React.FC  = () => {
  return(
    <View style={styles.scrollContainer}>
      <ActivityIndicator size={60} color="#e18c44" />
    </View>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 20
  }
})

export default Spinner;