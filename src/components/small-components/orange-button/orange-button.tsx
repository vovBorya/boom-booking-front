import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
// @ts-ignore
import translate from "../../../utils/i18n";
import {colors} from "../../../resources/colors";
import { shadow } from "../../../constants/shadow";

type OrangeButtonProps = {
  label: string,
  onClick: () => void
}

const OrangeButton: React.FC<OrangeButtonProps> = ({label, onClick }) => {

  return (
    <View style={styles.enterLabelView}>
      <TouchableOpacity
        style={[styles.button, styles.shadow]}
        onPress={onClick}
      >
        <Text style={styles.enterLabel}>{label}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.defaultBorder,
    borderRadius: 25,
    height: 45,
    width: 250
  },
  enterLabel: {
    color: colors.mainBackground,
    fontWeight: "bold",
    fontSize: 20
  },
  enterLabelView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  },
  shadow: {
    elevation: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: 'black',
    shadowOpacity: 0.5
  }
})

export default OrangeButton