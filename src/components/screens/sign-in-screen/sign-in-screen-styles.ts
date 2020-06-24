import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
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
    alignItems: "center",
    marginTop: 5
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
