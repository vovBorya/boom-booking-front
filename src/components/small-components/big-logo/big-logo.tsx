import React from "react";
import {Image, StyleSheet} from "react-native";

export const BigLogo = () => {
  return (
    <Image
      style={styles.logo}
      source={require('../../../resources/img/logo.png')}
      fadeDuration={500}
    />
  )
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 80,
    marginBottom: 30,
    width: 350,
    height: 150
  },
})

