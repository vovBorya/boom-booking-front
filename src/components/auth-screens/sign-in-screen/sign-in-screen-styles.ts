import { StyleSheet } from 'react-native'
import { colors } from "../../../resources/colors";

export const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: colors.mainBackground,
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  viewContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 7
  },
  icon: {
    height: 50,
    width: 50
  },
  signUp: {
    marginTop: 15,
    marginBottom: 30
  }
})
