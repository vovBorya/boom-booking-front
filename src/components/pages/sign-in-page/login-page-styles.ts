import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    marginTop: 60,
    marginBottom: 30,
    width: 350,
    height: 150
  },
  input: {
    width: 300,
    height: 50,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: '#e18c44',
    marginTop: 7
  },
  labelAndInput: {
    alignItems: "center",
    margin: 7
  },
  button: {
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e18c44",
    borderRadius: 25,
    height: 45,
    width: 250
  },
  enterLabel: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20
  },
  enterLabelView: {
    justifyContent: "center",
    alignItems: "center"
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
    marginTop: 15
  }
})

export default styles;