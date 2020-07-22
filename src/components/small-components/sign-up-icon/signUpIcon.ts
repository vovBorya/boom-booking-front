import { StyleSheet } from "react-native";
import { colors } from "../../../resources/colors";

const styles = StyleSheet.create({
  scrollContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    margin: 5,
    fontSize: 15
  },
  touchable: {
    borderColor: colors.defaultBorder,
    borderRadius: 30,
    borderWidth: 2,
    margin: 10,
    padding: 10
  },
  icon: {
    height: 180,
    width: 180
  }
})

export default styles