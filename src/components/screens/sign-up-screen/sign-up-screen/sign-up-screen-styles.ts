import { StyleSheet } from 'react-native'
import {colors} from "../../../../resources/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  viewContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  selectionBlock: {
    flexDirection: "column",
    padding: 10
  },
  userSignUp: {
    margin: 5
  },
  adminSignUp: {
    margin: 5
  },
  label: {
    textAlign: 'center',
    margin: 5,
    fontSize: 15
  },
  touchable: {
    borderColor: colors.defaultBorder,
    borderRadius: 30,
    borderWidth: 2,
    margin: 5,
    padding: 15,
    marginBottom: 20
  },
  icon: {
    height: 160,
    width: 160
  }
})

export default styles