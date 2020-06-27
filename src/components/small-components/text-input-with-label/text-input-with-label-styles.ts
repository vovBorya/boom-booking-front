import { StyleSheet } from 'react-native';
import { colors } from '../../../resources/colors'

const styles = StyleSheet.create({
  input: {
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
  validInput: {
    borderColor: colors.validBorder
  },
  invalidInput: {
    borderColor: colors.invalidBorder,

  },
  unusedInput: {
    borderColor: '#e18c44',
  },
  description: {
    marginTop: 10,
    width: 300,
    textAlign: "center",
    fontSize: 12
  }
})

export default styles