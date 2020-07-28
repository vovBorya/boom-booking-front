import { StyleSheet } from "react-native";
import {colors} from "../../../resources/colors";

export const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    flexDirection: "row",
    margin: 10
  },
  currentOrdersOption: {
    alignItems: "center",
    width: 175,
    height: 35,
    padding: 5,
    borderColor: colors.defaultBorder,
    borderWidth: 1,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
    elevation: 5
  },
  previousOrdersOption: {
    alignItems: "center",
    width: 175,
    height: 35,
    padding: 5,
    borderColor: colors.defaultBorder,
    borderRightWidth: 1,
    borderWidth: 1,
    borderBottomRightRadius: 7,
    borderTopRightRadius: 7,
    elevation: 5
  },
  activeOption: {
    backgroundColor: colors.defaultBorder,
    color: "white"
  },
  activeOptionTitle: {
    fontWeight: "bold",
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