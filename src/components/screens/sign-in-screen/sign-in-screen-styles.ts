import { StyleSheet } from 'react-native'
import { colors } from "../../../resources/colors";

export const styles = StyleSheet.create({
  container: {
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
  image: {
    height: 50,
    width: 50
  },
  signUp: {
    marginTop: 15,
    marginBottom: 30
  }
})
