import { StyleSheet } from 'react-native';

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
    borderColor: '#07ff00',
    shadowColor: '#07ff00',
  },
  invalidInput: {
    borderColor: '#ff0000',
    shadowColor: '#ff0000'

  },
  unusedInput: {
    borderColor: '#e18c44',
    shadowColor: '#e18c44'
  },
  description: {
    marginTop: 10,
    width: 300,
    textAlign: "center",
    fontSize: 12
  }
})

export default styles