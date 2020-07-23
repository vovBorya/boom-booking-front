import { StyleSheet } from "react-native";
import {colors} from "../../../resources/colors";

export const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: 'flex-start',
    backgroundColor: colors.mainBackground
  },
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: 20
  },
  orderOptions: {
    flex: 1,
    alignItems: "center"
  },
  orderItemList: {
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15
  }
})