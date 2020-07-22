import { StyleSheet } from "react-native";
import {colors} from "../../../resources/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  currentOrdersOption: {
    width: 175,
    height: 35,
    padding: 5,
    borderColor: colors.defaultBorder,
    borderWidth: 1,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7
  },
  previousOrdersOption: {
    width: 175,
    height: 35,
    padding: 5,
    borderColor: colors.defaultBorder,
    borderRightWidth: 1,
    borderWidth: 1,
    borderBottomRightRadius: 7,
    borderTopRightRadius: 7
  },
  activeOption: {
    backgroundColor: colors.defaultBorder,
    color: "white"
  },
  activeOptionTitle: {
    color: "white"
  },
  inactiveOptionTitle: {
    color: "#555555"
  },
  inactiveOption: {
    backgroundColor: colors.mainBackground,
    color: "black"
  }
})