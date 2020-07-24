import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {colors} from "../../../resources/colors";
import {values} from "../../../constants/values";

interface SmallOrangeButtonProps {
  style?: any
  text: string
}

export const SmallOrangeButton: React.FC<SmallOrangeButtonProps> = ({ style = {}, text }) => {

  return(
    <View style={style}>
      <TouchableOpacity style={styles.button} activeOpacity={values.TOUCHABLE_ACTIVITY_OPACITY}>
        <Text style={styles.text}>{ text }</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    height: 40,
    backgroundColor: colors.darkPrimaryColor,
    borderRadius: 20,
    elevation: 10
  },
  text: {
    fontSize: 14,
    color: "white"
  }
});