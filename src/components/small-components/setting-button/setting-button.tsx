import React from "react";
import {Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";
import {colors} from "../../../resources/colors";

const SettingButton = () => {

  return(
      <TouchableOpacity style={styles.touchable}>
        <Image style={styles.icon} source={require('../../../resources/img/icons/gear-w.png')} />
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 43,
    width: 43
  },
  touchable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 60,
    borderRadius: 30,
    borderColor: colors.defaultBorder,
    backgroundColor: colors.defaultBorder
  }
})

export default SettingButton;