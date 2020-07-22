import { StyleSheet } from 'react-native';
import { colors } from '../../../resources/colors'

const styles = StyleSheet.create({
  input: {
    alignItems: 'stretch',
    flexDirection: 'row',
    backgroundColor: colors.mainBackground,
    width: 300,
    height: 50,
    borderRadius: 30,
    borderWidth: 1.5,
    marginTop: 7,
  },
  labelAndInput: {
    alignItems: "center",
    margin: 7
  },
  textInput: {
    marginLeft: 50,
    width: 200,
    height: 50
  },
  validInput: {
    borderColor: colors.validBorder
  },
  invalidInput: {
    borderColor: colors.invalidBorder
  },
  unusedInput: {
    borderColor: colors.defaultBorder,
  },
  description: {
    marginTop: 10,
    width: 300,
    textAlign: "center",
    fontSize: 12
  },
  icon: {
    width: 45,
    height: 45,
    marginRight: 5
  },
  shadow: {
    elevation: 4,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: 'black',
    shadowOpacity: 0.5
  }
})

export default styles