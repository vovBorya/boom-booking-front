import React from "react";
import {StyleSheet, TouchableOpacity, Image} from "react-native";
import {colors} from "../../../resources/colors";
import { shadow } from "../../../constants/shadow";

const SettingButton = () => {

  return(
      <TouchableOpacity style={[styles.touchable, styles.shadow]}>
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
  },
  shadow: {
    elevation: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 1
  }
})

export default SettingButton;